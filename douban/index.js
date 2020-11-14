var input = document.querySelector('.a')
        input.onfocus = function() {
            input.value = ''
        }
        input.onblur = function() {
            this.value = '书籍、电影、音乐、小组、小站、成员'
        }