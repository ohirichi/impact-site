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
        className: "jsx-731006692" + " " + "slideshow-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("button", {
        onClick: this.showPrev,
        className: "jsx-731006692" + " " + "prev-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("img", {
        src: "/arrow.svg",
        className: "jsx-731006692",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-731006692" + " " + "slide-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.state.slides.map(function (slide, index) {
        return __jsx("div", {
          key: index,
          className: "jsx-731006692" + " " + ("slide" + (_this3.state.selectedSlideIndex == index ? " active" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-731006692" + " " + "slide-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, slide.heading, " "), __jsx("img", {
          src: slide.image,
          alt: "",
          className: "jsx-731006692" + " " + "slide-img",
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
          className: "jsx-731006692",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })));
      })), __jsx("div", {
        className: "jsx-731006692" + " " + "indicators-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.state.slides.map(function (slide, index) {
        return __jsx("div", {
          onClick: _this3.showSlide.bind(_this3, index),
          key: index,
          className: "jsx-731006692" + " " + ("indicator" + (_this3.state.selectedSlideIndex == index ? " active" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
      })), __jsx("button", {
        onClick: this.showNext,
        className: "jsx-731006692" + " " + "next-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        src: "/arrow.svg",
        className: "jsx-731006692",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "731006692",
        __self: this
      }, ".slideshow-container.jsx-731006692{max-width:100vw;height:50vh;min-height:40vw;display:grid;grid-template-columns:10% 80% 10%;grid-template-rows:85% 15%;grid-template-areas: \"left center right\" \"left bottom right\";}button.jsx-731006692:focus{outline:none;}.prev-button.jsx-731006692{grid-area:left;}.next-button.jsx-731006692{grid-area:right;}button.jsx-731006692{z-index:10;height:3rem;width:2rem;border-radius:50%;}button.jsx-731006692>img.jsx-731006692{width:40%;min-width:25px;}.next-button.jsx-731006692>img.jsx-731006692{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.prev-button.jsx-731006692,.next-button.jsx-731006692{z-index:100;grid-row:1/2;height:100%;width:100%;color:white;font-weight:bold;opacity:0.8;border:none;background:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.prev-button.jsx-731006692:hover,.next-button.jsx-731006692:hover{opacity:1;}.slide-container.jsx-731006692{grid-row:1/2;grid-column:2/3;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}.slide.jsx-731006692{display:none;border-radius:5px;}.slide.active.jsx-731006692{display:grid;grid-template-areas: \"main\";height:100%;}.slide.jsx-731006692>img.jsx-731006692,.slide.jsx-731006692>a.jsx-731006692{grid-area:main;justify-self:stretch;width:100%;height:100%;object-fit:cover;}.slide.jsx-731006692>a.jsx-731006692{z-index:50;}.slide.jsx-731006692>h2.jsx-731006692{grid-area:main;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;z-index:10;background-color:rgba(0,0,0,0.7);border-radius:5px;color:white;padding:1rem;}.indicators-container.jsx-731006692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-area:bottom;}.indicator.jsx-731006692{border-radius:50%;height:.5rem;width:.5rem;margin:1rem;background-color:#1B0DA5;z-index:100;}.indicator.active.jsx-731006692{background-color:var(--accent-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmljaGlcXERlc2t0b3BcXENvZGVcXGltcGFjdC1zaXRlXFxjb21wb25lbnRzXFxTbGlkZVNob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVxQixBQUc2QyxBQVlKLEFBSUcsQUFJQSxBQUlMLEFBU0EsQUFNZSxBQUliLEFBb0JGLEFBR0UsQUFNQSxBQU1BLEFBT0csQUFTSixBQUlHLEFBVUYsQUFLSyxBQVVvQixVQXpGdkIsQUE4QmxCLENBdkNnQixBQXNFaEIsQ0FuRGlCLENBL0JqQixBQXNEb0IsQUFNRSxBQU9aLEVBL0RWLEFBcUV3QixBQWFGLENBbEdOLEFBb0JoQixFQThGaUIsS0F6RkYsRUFVZixBQVlnQixHQTlDSSxDQWtFRSxFQU90QixBQXlDZSxHQXpGTSxFQTRETixDQXRDQSxBQTJFZixJQTNDZSxFQW9DQyxDQWxIQyxHQXFGRixDQXRDQSxJQXJCZixDQXFEQSxFQW9DNkIsRUFsSFMsRUFxRmxCLENBdENDLGNBMERNLEVBbEIzQixDQXRDZ0IsR0FrRUEsTUFuQk8sQ0E1RHZCLEVBY2UsRUFqRGdCLENBb0gvQixTQWxFbUIsRUFlbkIsR0ErQmUsV0E3Q0UsQUE4Q3VCLENBN0Z6QyxnQ0E4RnVCLGtCQUNQLEtBTUssTUFyR3BCLENBZ0dpQixVQU1qQixDQXREMkIsRUFpRDNCLGlHQWhEdUIsNkZBQ0wsZUFFbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxSaWNoaVxcRGVza3RvcFxcQ29kZVxcaW1wYWN0LXNpdGVcXGNvbXBvbmVudHNcXFNsaWRlU2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZVNob3cgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNsaWRlczogW3tpZDogMCwgaGVhZGluZzpcIkNhc2UgU3R1ZHkgMVwiLCBpbWFnZTpcIi9pbWcxLmpwZ1wifSwge2lkOiAxLCBoZWFkaW5nOlwiQ2FzZSBTdHVkeSAyXCIsIGltYWdlOlwiL2ltZzIuanBnXCJ9LCB7aWQ6IDIsIGhlYWRpbmc6XCJDYXNlIFN0dWR5IDNcIiwgaW1hZ2U6XCIvaW1nMy5qcGdcIn1dLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFNsaWRlSW5kZXg6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93TmV4dCA9IHRoaXMuc2hvd05leHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNob3dQcmV2ID0gdGhpcy5zaG93UHJldi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hvd1NsaWRlID0gdGhpcy5zaG93U2xpZGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5hdXRvUGxheSA9ICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnNob3dOZXh0KCksNTAwMClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dQcmV2KGUpe1xyXG4gICAgICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTbGlkZUluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNsaWRlSW5kZXg7XHJcbiAgICAgICAgbGV0IHNsaWRlcyA9IHRoaXMuc3RhdGUuc2xpZGVzO1xyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAgKGN1cnJlbnRTbGlkZUluZGV4IC0gMSkgPCAwID8gc2xpZGVzLmxlbmd0aCAtIDEgOiBjdXJyZW50U2xpZGVJbmRleCAtIDE7XHJcbiAgICAgICAgdGhpcy5zaG93U2xpZGUobmV4dEluZGV4KTsgXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd05leHQoZSl7XHJcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkU2xpZGVJbmRleDtcclxuICAgICAgICBsZXQgc2xpZGVzID0gdGhpcy5zdGF0ZS5zbGlkZXM7XHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9ICAoY3VycmVudFNsaWRlSW5kZXggKyAxKSA+PSBzbGlkZXMubGVuZ3RoID8gMCA6IGN1cnJlbnRTbGlkZUluZGV4ICsgMTtcclxuICAgICAgICB0aGlzLnNob3dTbGlkZShuZXh0SW5kZXgpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NsaWRlKHNsaWRlSW5kZXgsIGUpe1xyXG4gICAgICAgIGlmKGUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFNsaWRlSW5kZXg6IHNsaWRlSW5kZXh9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvdy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJldi1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNob3dQcmV2fT48aW1nIHNyYyA9IFwiL2Fycm93LnN2Z1wiLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNsaWRlXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZFNsaWRlSW5kZXggPT0gaW5kZXggPyBcIiBhY3RpdmVcIiA6IFwiXCIpfSBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2xpZGUtdGl0bGVcIiA+e3NsaWRlLmhlYWRpbmd9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNsaWRlLWltZ1wiIHNyYz17c2xpZGUuaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+PGE+PC9hPjwvTGluayA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGljYXRvcnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaW5kaWNhdG9yXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZFNsaWRlSW5kZXggPT0gaW5kZXggPyBcIiBhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXt0aGlzLnNob3dTbGlkZS5iaW5kKHRoaXMsIGluZGV4KX0ga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5zaG93TmV4dH0+PGltZyBzcmMgPSBcIi9hcnJvdy5zdmdcIi8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXNob3ctY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgODAlIDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogODUlIDE1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgY2VudGVyIHJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdCBib3R0b20gcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmV2LWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQtYnV0dG9ueyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uID4gaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDoyNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQtYnV0dG9uID4gaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmV2LWJ1dHRvbiwgLm5leHQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCAodG8gbGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSkgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZm9udC1zaXplOiAxLjVyZW07ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmV2LWJ1dHRvbjpob3ZlciwgLm5leHQtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3c6MS8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZS5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYWluXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlID4gaW1nLCAuc2xpZGUgPiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUgPiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUgPiBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6bWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kaWNhdG9ycy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6Ym90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRpY2F0b3J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogIzFCMERBNSBzb2xpZCAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6LjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIwREE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGljYXRvci5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Richi\\\\Desktop\\\\Code\\\\impact-site\\\\components\\\\SlideShow.js */"));
    }
  }]);

  return SlideShow;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.6ecf3a9f1a3d4b1bad16.hot-update.js.map