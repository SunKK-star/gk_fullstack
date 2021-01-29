type Ref<T = any> = {
  value: T
}
type UnWrapRef<T> = {
  ref: T extends Ref<infer R> ? UnWrapRef<R> : T 
  object: { [K in keyof T]:  UnWrapRef<T[K]>}
  other: T 
}[T extends Ref ? 'ref' : 'other']
function ref<T>(value: T): T extends Ref ? T : Ref<UnWrapRef<T>>

const count = ref(2)
count.value  // number