function privateMethods(height, width) {

    let _height = height;
    let _width = width;

    return  {
        getHeight() {
            return _height;
        },
        getWidth() {
            return _width;
        },
        setHeight(newHeight) {
            _height = newHeight;
        },
        setWidth(newWidth) {
            _width = newWidth;
        }
    };
}
let sizes = privateMethods(10 ,20)