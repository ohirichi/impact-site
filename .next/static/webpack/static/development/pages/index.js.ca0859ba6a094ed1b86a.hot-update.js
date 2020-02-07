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
    value: function componentDidMount() {// this.autoPlay =  setInterval(() => this.showNext(),5000)
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// clearInterval(this.autoPlay);
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
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-244336992" + " " + "slideshow-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("button", {
        onClick: this.showPrev,
        className: "jsx-244336992" + " " + "prev-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("img", {
        src: "/arrow.svg",
        className: "jsx-244336992",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-244336992" + " " + "slide-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.state.slides.map(function (slide, index) {
        return __jsx("div", {
          key: index,
          className: "jsx-244336992" + " " + ("slide" + (_this2.state.selectedSlideIndex == index ? " active" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("h2", {
          className: "jsx-244336992" + " " + "slide-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, slide.heading, " "), __jsx("img", {
          src: slide.image,
          alt: "",
          className: "jsx-244336992" + " " + "slide-img",
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
          className: "jsx-244336992",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })));
      })), __jsx("div", {
        className: "jsx-244336992" + " " + "indicators-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.state.slides.map(function (slide, index) {
        return __jsx("div", {
          onClick: _this2.showSlide.bind(_this2, index),
          key: index,
          className: "jsx-244336992" + " " + ("indicator" + (_this2.state.selectedSlideIndex == index ? " active" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        });
      })), __jsx("button", {
        onClick: this.showNext,
        className: "jsx-244336992" + " " + "next-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("img", {
        src: "/arrow.svg",
        className: "jsx-244336992",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "244336992",
        __self: this
      }, ".slideshow-container.jsx-244336992{max-width:100vw;height:50vh;min-height:40vw;display:grid;grid-template-columns:10% 80% 10%;grid-template-rows:85% 15%;grid-template-areas: \"left center right\" \"left bottom right\";}button.jsx-244336992:focus{outline:none;}.prev-button.jsx-244336992{grid-area:left;}.next-button.jsx-244336992{grid-area:right;}button.jsx-244336992{z-index:10;height:3rem;width:2rem;border-radius:50%;}button.jsx-244336992>img.jsx-244336992{width:40%;min-width:25px;}.next-button.jsx-244336992>img.jsx-244336992{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.prev-button.jsx-244336992,.next-button.jsx-244336992{z-index:100;grid-row:1/2;height:100%;width:100%;color:white;font-weight:bold;opacity:0.8;border:none;background:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.prev-button.jsx-244336992:hover,.next-button.jsx-244336992:hover{opacity:1;}.slide-container.jsx-244336992{grid-row:1/2;grid-column:2/3;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}.slide.jsx-244336992{display:none;}.slide.active.jsx-244336992{display:grid;grid-template-columns:50% 50%;grid-template-areas: \"img title\";height:100%;}.slide.jsx-244336992>img.jsx-244336992{grid-area:img;justify-self:stretch;height:100%;width:100%;object-fit:cover;}.slide.jsx-244336992>a.jsx-244336992{grid-column:1/3;grid-row:1/2;z-index:50;justify-self:stretch;}.slide.jsx-244336992>h2.jsx-244336992{grid-area:title;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;color:var(--main-color);padding:1rem;}.indicators-container.jsx-244336992{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;grid-area:bottom;}.indicator.jsx-244336992{border-radius:50%;border:#1B0DA5 solid 1px;height:.5rem;width:.5rem;margin:1rem;background-color:#1B0DA5;z-index:100;}.indicator.active.jsx-244336992{background-color:var(--accent-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmljaGlcXERlc2t0b3BcXENvZGVcXGltcGFjdC1zaXRlXFxjb21wb25lbnRzXFxTbGlkZVNob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVxQixBQUc2QyxBQVlKLEFBSUcsQUFJQSxBQUlMLEFBU0EsQUFNZSxBQUliLEFBb0JGLEFBR0UsQUFNQSxBQUtBLEFBUUUsQUFVRSxBQU9ELEFBT0gsQUFLSyxBQVVvQixVQTFGdkIsQUE4QmxCLENBdkNnQixDQW1CQyxDQS9CakIsQUFzRG9CLEFBT3BCLEFBSWtDLENBUVYsQ0FyRXhCLENBaEJnQixBQW9CaEIsQUEyRWlCLEFBT0ssRUFZTyxLQXpGZCxFQVVmLEFBWWdCLEdBOUNJLENBa0VFLEFBNkJQLEtBdEVNLENBNERMLEVBdENELEFBNEVmLEdBM0J3QixHQWxCVCxBQW9DRSxDQWpIQSxHQXFGRixDQXRDQSxJQXJCZixJQXdGZSxDQWpIdUIsQ0FxRmxCLEVBdENDLENBZ0RyQixPQW1CZ0IsTUFSVyxDQW5CM0IsQ0FWZSxDQTVCQyxHQWtFYSxPQS9FN0IsQUFnRXVCLENBdEJ2QixDQTVCZSxFQWpEZ0IsVUFrRFosRUFlbkIsRUFrRGdCLEVBZlcsVUFqRFYsQUFrRWpCLENBakhELGFBaUdrQixhQUNqQiw2QkFJb0IsTUF0R3BCLFdBdUdBLENBdkQyQixtR0FDSiw2RkFDTCxlQUVsQiIsImZpbGUiOiJDOlxcVXNlcnNcXFJpY2hpXFxEZXNrdG9wXFxDb2RlXFxpbXBhY3Qtc2l0ZVxcY29tcG9uZW50c1xcU2xpZGVTaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlU2hvdyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2xpZGVzOiBbe2lkOiAwLCBoZWFkaW5nOlwiQ2FzZSBTdHVkeSAxXCIsIGltYWdlOlwiL2ltZzEuanBnXCJ9LCB7aWQ6IDEsIGhlYWRpbmc6XCJDYXNlIFN0dWR5IDJcIiwgaW1hZ2U6XCIvaW1nMi5qcGdcIn0sIHtpZDogMiwgaGVhZGluZzpcIkNhc2UgU3R1ZHkgM1wiLCBpbWFnZTpcIi9pbWczLmpwZ1wifV0sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkU2xpZGVJbmRleDogMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dOZXh0ID0gdGhpcy5zaG93TmV4dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hvd1ByZXYgPSB0aGlzLnNob3dQcmV2LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG93U2xpZGUgPSB0aGlzLnNob3dTbGlkZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICBcclxuICAgICAgICAvLyB0aGlzLmF1dG9QbGF5ID0gIHNldEludGVydmFsKCgpID0+IHRoaXMuc2hvd05leHQoKSw1MDAwKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd1ByZXYoZSl7XHJcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkU2xpZGVJbmRleDtcclxuICAgICAgICBsZXQgc2xpZGVzID0gdGhpcy5zdGF0ZS5zbGlkZXM7XHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9ICAoY3VycmVudFNsaWRlSW5kZXggLSAxKSA8IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRTbGlkZUluZGV4IC0gMTtcclxuICAgICAgICB0aGlzLnNob3dTbGlkZShuZXh0SW5kZXgpOyBcclxuICAgIH1cclxuXHJcbiAgICBzaG93TmV4dChlKXtcclxuICAgICAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2xpZGVJbmRleCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRTbGlkZUluZGV4O1xyXG4gICAgICAgIGxldCBzbGlkZXMgPSB0aGlzLnN0YXRlLnNsaWRlcztcclxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gIChjdXJyZW50U2xpZGVJbmRleCArIDEpID49IHNsaWRlcy5sZW5ndGggPyAwIDogY3VycmVudFNsaWRlSW5kZXggKyAxO1xyXG4gICAgICAgIHRoaXMuc2hvd1NsaWRlKG5leHRJbmRleCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93U2xpZGUoc2xpZGVJbmRleCwgZSl7XHJcbiAgICAgICAgaWYoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkU2xpZGVJbmRleDogc2xpZGVJbmRleH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2hvd1ByZXZ9PjxpbWcgc3JjID0gXCIvYXJyb3cuc3ZnXCIvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2xpZGVcIiArICh0aGlzLnN0YXRlLnNlbGVjdGVkU2xpZGVJbmRleCA9PSBpbmRleCA/IFwiIGFjdGl2ZVwiIDogXCJcIil9IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbGlkZS10aXRsZVwiID57c2xpZGUuaGVhZGluZ30gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2xpZGUtaW1nXCIgc3JjPXtzbGlkZS5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj48YT48L2E+PC9MaW5rID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaWNhdG9ycy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbmRpY2F0b3JcIiArICh0aGlzLnN0YXRlLnNlbGVjdGVkU2xpZGVJbmRleCA9PSBpbmRleCA/IFwiIGFjdGl2ZVwiIDogXCJcIil9IG9uQ2xpY2s9e3RoaXMuc2hvd1NsaWRlLmJpbmQodGhpcywgaW5kZXgpfSBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNob3dOZXh0fT48aW1nIHNyYyA9IFwiL2Fycm93LnN2Z1wiLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlc2hvdy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA4MCUgMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4NSUgMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdCBjZW50ZXIgcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0IGJvdHRvbSByaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXYtYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmV4dC1idXR0b257IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOjI1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmV4dC1idXR0b24gPiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXYtYnV0dG9uLCAubmV4dC1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50ICh0byBsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpKSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmb250LXNpemU6IDEuNXJlbTsgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXYtYnV0dG9uOmhvdmVyLCAubmV4dC1idXR0b246aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdzoxLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltZyB0aXRsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZSA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGltZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OmNvdmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZSA+IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUgPiBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6dGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRpY2F0b3JzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTpib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGljYXRvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAjMUIwREE1IHNvbGlkIDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDouNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjBEQTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kaWNhdG9yLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Richi\\\\Desktop\\\\Code\\\\impact-site\\\\components\\\\SlideShow.js */"));
    }
  }]);

  return SlideShow;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.ca0859ba6a094ed1b86a.hot-update.js.map