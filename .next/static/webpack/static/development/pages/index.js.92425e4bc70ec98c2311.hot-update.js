webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SlideShow.js":
/*!*********************************!*\
  !*** ./components/SlideShow.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideShow; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\Richi\\Desktop\\Code\\impact-site\\components\\SlideShow.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var SlideShow =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SlideShow, _Component);

  function SlideShow(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlideShow);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SlideShow).call(this, props));
    _this.state = {
      slides: [{
        id: 0,
        heading: "Case Study 1",
        image: "/img1.jpg"
      }, {
        id: 1,
        heading: "Case Study 2",
        image: "/img2.jpg"
      }, {
        id: 2,
        heading: "Case Study 3",
        image: "/img3.jpg"
      }],
      selectedSlideIndex: 0
    };
    _this.showNext = _this.showNext.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.showPrev = _this.showPrev.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.showSlide = _this.showSlide.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlideShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.autoPlay = setInterval(function () {
        return _this2.showNext();
      }, 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.autoPlay);
    }
  }, {
    key: "showPrev",
    value: function showPrev(e) {
      if (e) e.preventDefault();
      var currentSlideIndex = this.state.selectedSlideIndex;
      var slides = this.state.slides;
      var nextIndex = currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
      this.showSlide(nextIndex);
    }
  }, {
    key: "showNext",
    value: function showNext(e) {
      if (e) e.preventDefault();
      var currentSlideIndex = this.state.selectedSlideIndex;
      var slides = this.state.slides;
      var nextIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
      this.showSlide(nextIndex);
    }
  }, {
    key: "showSlide",
    value: function showSlide(slideIndex, e) {
      if (e) e.preventDefault();
      this.setState({
        selectedSlideIndex: slideIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        className: "jsx-2072572025" + " " + "slideshow-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("button", {
        onClick: this.showPrev,
        className: "jsx-2072572025" + " " + "prev-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("img", {
        src: "/arrow.svg",
        className: "jsx-2072572025",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2072572025" + " " + "slide-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.state.slides.map(function (slide, index) {
        return __jsx("div", {
          key: index,
          className: "jsx-2072572025" + " " + ("slide" + (_this3.state.selectedSlideIndex == index ? " active" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-2072572025" + " " + "slide-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, slide.heading, " "), __jsx("img", {
          src: slide.image,
          alt: "",
          className: "jsx-2072572025" + " " + "slide-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/services",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-2072572025",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })));
      })), __jsx("div", {
        className: "jsx-2072572025" + " " + "indicators-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.state.slides.map(function (slide, index) {
        return __jsx("div", {
          onClick: _this3.showSlide.bind(_this3, index),
          key: index,
          className: "jsx-2072572025" + " " + ("indicator" + (_this3.state.selectedSlideIndex == index ? " active" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
      })), __jsx("button", {
        onClick: this.showNext,
        className: "jsx-2072572025" + " " + "next-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        src: "/arrow.svg",
        className: "jsx-2072572025",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2072572025",
        __self: this
      }, ".slideshow-container.jsx-2072572025{max-width:100vw;height:50vh;min-height:40vw;display:grid;grid-template-columns:10% 80% 10%;grid-template-rows:85% 15%;grid-template-areas: \"left center right\" \"left bottom right\";}button.jsx-2072572025:focus{outline:none;}.prev-button.jsx-2072572025{grid-area:left;}.next-button.jsx-2072572025{grid-area:right;}button.jsx-2072572025{z-index:10;height:3rem;width:2rem;border-radius:50%;}button.jsx-2072572025>img.jsx-2072572025{width:40%;min-width:25px;}.next-button.jsx-2072572025>img.jsx-2072572025{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.prev-button.jsx-2072572025,.next-button.jsx-2072572025{z-index:100;grid-row:1/2;height:100%;width:100%;color:white;font-weight:bold;opacity:0.8;border:none;background:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.prev-button.jsx-2072572025:hover,.next-button.jsx-2072572025:hover{opacity:1;}.slide-container.jsx-2072572025{grid-row:1/2;grid-column:2/3;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}.slide.jsx-2072572025{display:none;}.slide.active.jsx-2072572025{display:grid;grid-template-areas: \"main\";height:100%;}.slide.jsx-2072572025>img.jsx-2072572025,.slide.jsx-2072572025>a.jsx-2072572025{grid-area:main;justify-self:stretch;width:100%;height:100%;object-fit:cover;}.slide.jsx-2072572025>a.jsx-2072572025{z-index:50;}.slide.jsx-2072572025>h2.jsx-2072572025{grid-area:main;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;z-index:10;background-color:rgba(0,0,0,0.6);color:white;padding:1rem;}.indicators-container.jsx-2072572025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-area:bottom;}.indicator.jsx-2072572025{border-radius:50%;height:.5rem;width:.5rem;margin:1rem;background-color:#1B0DA5;z-index:100;}.indicator.active.jsx-2072572025{background-color:var(--accent-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmljaGlcXERlc2t0b3BcXENvZGVcXGltcGFjdC1zaXRlXFxjb21wb25lbnRzXFxTbGlkZVNob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVxQixBQUc2QyxBQVlKLEFBSUcsQUFJQSxBQUlMLEFBU0EsQUFNZSxBQUliLEFBb0JGLEFBR0UsQUFNQSxBQUtBLEFBT0csQUFTSixBQUlHLEFBU0YsQUFLSyxBQVVvQixVQXZGdkIsQUE4QmxCLENBdkNnQixBQXFFaEIsQ0FsRGlCLENBL0JqQixBQXNEb0IsQUFPcEIsQUFLVSxFQTlEVixBQW9Fd0IsQUFhRixDQWpHTixBQW9CaEIsRUE0RmlCLEtBdkZGLEVBVWYsQUFZZ0IsR0E5Q0ksQ0FrRUUsRUE4Q1AsR0F2Rk0sRUEyRE4sQ0FyQ0EsQUF5RWYsSUExQ2UsRUFtQ0MsQ0FoSEMsR0FvRkYsQ0FyQ0EsSUFyQmYsQ0FvREEsRUFtQzZCLEVBaEhTLEVBb0ZsQixDQXJDQyxjQXdETSxFQWpCM0IsQ0FyQ2dCLEdBZ0VBLE1BbEJPLENBM0R2QixFQWNlLEVBakRnQixDQWtIL0IsU0FoRW1CLEVBZW5CLEdBOEJlLFdBNUNFLEFBNkNxQixDQTVGdkMsZ0NBNkZnQixZQUNFLFdBS0csRUFKcEIsSUEvRkEsV0FvR0EsQ0FwRDJCLG1HQUNKLDZGQUNMLGVBRWxCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUmljaGlcXERlc2t0b3BcXENvZGVcXGltcGFjdC1zaXRlXFxjb21wb25lbnRzXFxTbGlkZVNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVTaG93IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzbGlkZXM6IFt7aWQ6IDAsIGhlYWRpbmc6XCJDYXNlIFN0dWR5IDFcIiwgaW1hZ2U6XCIvaW1nMS5qcGdcIn0sIHtpZDogMSwgaGVhZGluZzpcIkNhc2UgU3R1ZHkgMlwiLCBpbWFnZTpcIi9pbWcyLmpwZ1wifSwge2lkOiAyLCBoZWFkaW5nOlwiQ2FzZSBTdHVkeSAzXCIsIGltYWdlOlwiL2ltZzMuanBnXCJ9XSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRTbGlkZUluZGV4OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd05leHQgPSB0aGlzLnNob3dOZXh0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG93UHJldiA9IHRoaXMuc2hvd1ByZXYuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3dTbGlkZSA9IHRoaXMuc2hvd1NsaWRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXV0b1BsYXkgPSAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5zaG93TmV4dCgpLDUwMDApXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93UHJldihlKXtcclxuICAgICAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2xpZGVJbmRleCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTbGlkZUluZGV4O1xyXG4gICAgICAgIGxldCBzbGlkZXMgPSB0aGlzLnN0YXRlLnNsaWRlcztcclxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gIChjdXJyZW50U2xpZGVJbmRleCAtIDEpIDwgMCA/IHNsaWRlcy5sZW5ndGggLSAxIDogY3VycmVudFNsaWRlSW5kZXggLSAxO1xyXG4gICAgICAgIHRoaXMuc2hvd1NsaWRlKG5leHRJbmRleCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHNob3dOZXh0KGUpe1xyXG4gICAgICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTbGlkZUluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNsaWRlSW5kZXg7XHJcbiAgICAgICAgbGV0IHNsaWRlcyA9IHRoaXMuc3RhdGUuc2xpZGVzO1xyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAgKGN1cnJlbnRTbGlkZUluZGV4ICsgMSkgPj0gc2xpZGVzLmxlbmd0aCA/IDAgOiBjdXJyZW50U2xpZGVJbmRleCArIDE7XHJcbiAgICAgICAgdGhpcy5zaG93U2xpZGUobmV4dEluZGV4KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTbGlkZShzbGlkZUluZGV4LCBlKXtcclxuICAgICAgICBpZihlKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRTbGlkZUluZGV4OiBzbGlkZUluZGV4fSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3ctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYtYnV0dG9uXCIgb25DbGljaz17dGhpcy5zaG93UHJldn0+PGltZyBzcmMgPSBcIi9hcnJvdy5zdmdcIi8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzbGlkZVwiICsgKHRoaXMuc3RhdGUuc2VsZWN0ZWRTbGlkZUluZGV4ID09IGluZGV4ID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0ga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNsaWRlLXRpdGxlXCIgPntzbGlkZS5oZWFkaW5nfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZS1pbWdcIiBzcmM9e3NsaWRlLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPjxhPjwvYT48L0xpbmsgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3JzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImluZGljYXRvclwiICsgKHRoaXMuc3RhdGUuc2VsZWN0ZWRTbGlkZUluZGV4ID09IGluZGV4ID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0gb25DbGljaz17dGhpcy5zaG93U2xpZGUuYmluZCh0aGlzLCBpbmRleCl9IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2hvd05leHR9PjxpbWcgc3JjID0gXCIvYXJyb3cuc3ZnXCIvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVzaG93LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDgwJSAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDg1JSAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0IGNlbnRlciByaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgYm90dG9tIHJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJldi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0LWJ1dHRvbnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6MjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0LWJ1dHRvbiA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJldi1idXR0b24sIC5uZXh0LWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQgKHRvIGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSkpICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZvbnQtc2l6ZTogMS41cmVtOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJldi1idXR0b246aG92ZXIsIC5uZXh0LWJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OjEvMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOnN0cmV0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZSA+IGltZywgLnNsaWRlID4gYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IG1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OmNvdmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlID4gYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlID4gaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOm1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRpY2F0b3JzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTpib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGljYXRvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAjMUIwREE1IHNvbGlkIDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDouNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjBEQTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kaWNhdG9yLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Richi\\\\Desktop\\\\Code\\\\impact-site\\\\components\\\\SlideShow.js */"));
    }
  }]);

  return SlideShow;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.92425e4bc70ec98c2311.hot-update.js.map