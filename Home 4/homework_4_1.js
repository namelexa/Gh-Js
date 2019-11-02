function privateMethods(height, width) {

    let _height = height;
    let _width = width;

    return function () {
        let getHeight = () => {
            return _height;
        };
        let getWidth = () => {
            return _width;
        };
        let setHeight = (newHeight) => {
            _height = newHeight;
        };
        let setWidth = (newWidth) => {
            _width = newWidth;
        };
    };
}
