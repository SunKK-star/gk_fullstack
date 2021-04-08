const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MPromise {
  FULFILLED_CALLBACK_LIST = [];
  REJECTED_CALLBACK_LIST = [];
  _status = PENDING;
  constructor(fn) {
    this.status = PEDING;
    this.value = null;
    this.reason = null;
    try {
      fn(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error);
    }
  }

  get status() {
    return this._status;
  }
  set status(newStatus) {
    this._status = newStatus;
    switch (newStatus) {
      // 此时状态变更时会同步地去拿value/reason值，所以resolve/reject函数中赋值的操作先于变更状态
      case FULFILLED: {
        this.FULFILLED_CALLBACK_LIST.forEach(callback => {
          callback(this.value);
        })
        break;
      }
      case REJECTED: {
        this.REJECTED_CALLBACK_LIST.forEach(callback => {
          callback(this.reason)
        })
        break;
      }
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.value = value
      this.status = FULFILLED;
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.reason = reason;
      this.status = REJECTED;
    }
  }

  then(onFilfilled, onRejected) {
    const fulfilledFn = this.isFunction(onFilfilled) ? onFilfilled : (value) => value;
    const rejectedFn = this.isFunction(onRejected) ? onRejected : (reason) => {
      throw reason
    };
    const fulfilledFnWithCatch = (resolve, reject) => {
      try {
        if(!this.isFunction(onFilfilled)) {
          resolve(this.value)
        } else {
          const x = fulfilledFn(this.value);
          this.resolvePromise()
        }
        
        
      } catch (error) {
        reject(error)
      }
    }
    const rejectedFnWithCatch = (resolve, reject) => {
      try {
        rejectedFn(this.reason);
        if (this.isFunction(onRejected)) {
          resolve(newPromise, x, resolve, reject);
        }
      } catch (error) {
        reject(error)
      }
    }
    switch (this.status) {
      case FULFILLED: {
        const newPromise = new MPromise(fulfilledFnWithCatch)
        return newPromise
      }
      case REJECTED: {
        const newPromise = new MPromise(rejectedFnWithCatch)
        return newPromise
      }
      default: {
        const newPromise = new MPromise((resolve, reject) => {
          this.FULFILLED_CALLBACK_LIST.push(() => fulfilledFnWithCatch(resolve, reject));
          this.REJECTED_CALLBACK_LIST.push(() => rejectedFnWithCatch(resolve, reject))
        })
        return newPromise
      }
    }
  }

  resolvePromise(newPromise, x, resolve, reject) {

  }

  isFunction(param) {
    return typeof param === 'function'
  }
}

const propmise = new MPromise(() => {

}).then()