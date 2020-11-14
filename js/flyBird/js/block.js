function Block() {
    this.upDivWrap = null
    this.downDivWrap = null
    this.downHeight = baseObj.randomNum(0, 150)
    this.gapHeight = baseObj.randomNum(150, 160)
    this.upHeight = 312 - this.downHeight - this.gapHeight

    // 生成管道
    this.createDive = function(url, height, positionType, left, top) {
        var newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height
        newDiv.style.position = positionType
        newDiv.style.left = left
        newDiv.style.top = top
        newDiv.style.backgroundImage = url
        return newDiv
    }

    this.createBlock = function() {
        var upDive1 = this.createDive('url(img/up_mod.png)', this.upHeight + 'px')
        var upDive2 = this.createDive('url(img/up_pipe.png)', '60px')
        this.upDivWrap = this.createDive(null, null, 'absolute', '450px', )
        this.upDivWrap.appendChild(upDive1)
        this.upDivWrap.appendChild(upDive2)

        var downDive1 = this.createDive('url(img/down_pipe.png)', '60px')
        var downDive2 = this.createDive('url(img/down_mod.png)', this.downHeight + 'px')
        this.downDivWrap = this.createDive(null, null, 'absolute', '450px', 363 - this.downHeight + 'px')
        this.downDivWrap.appendChild(downDive1)
        this.downDivWrap.appendChild(downDive2)

        jswrapBg.appendChild(this.upDivWrap)
        jswrapBg.appendChild(this.downDivWrap)

        this.moveBlock = function() {
            this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px' 
            this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 +'px'
        }
    }
}