import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`

:focus {
    outline:none;
}

* {
    box-sizing:border-box;
    margin:0;
    font-family: 'Roboto',sans-serif;
    padding: 0;
}

.logo {
    font-size:2rem;
}

.navbar {
    background: transparent;
}

.navbar-active {
    background: #f26a2e;
}

.navlink-active {
    font-weight:bold;
    color:red;
}

/* modal */


.modal {
  font-size: 12px;
  padding:1em;

}
.modal > .header {
  font-size: 2rem;
  text-align: left;
  padding: 5px;
  color: #f26a2e;
  text-transform: uppercase;
}
.modal > .desc {
    padding:1em;
    display:flex;
}

.modal > .desc img {
    width:100px;
}

.modal > .content {
  width: 100%;
  padding: 1em 2em;
  font-size: 1rem;
}
.modal > .actions {
  padding: 10px 5px;

}
.modal > .close {
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
}
  
/* gallery */

.gallery-item1 {
	grid-row: 1 / span 2;
	grid-column: 1 / span 2;
}

.gallery-item2 {
	grid-row: 1 / span 3;
	grid-column: 3 / span 3;
}

.gallery-item3 {
	grid-row: 1 / span 2;
	grid-column: 6 / 7;
}

.gallery-item4 {
	grid-row: 1 / span 2;
	grid-column: 7 / -1;
}

.gallery-item5 {
	grid-row: 3 / span 3;
	grid-column: 1 / span 2;
}

.gallery-item6 {
	grid-row: 4 / span 2;
	grid-column: 3 / span 2;
}

.gallery-item7 {
	grid-row: 4 / 5;
	grid-column: 5 / 6;
}

.gallery-item8 {
	grid-row: 3 / span 2;
	grid-column: 6 / span 2;
}

.gallery-item9 {
	grid-row: 3 / span 3;
	grid-column: 8 / -1;
}

.gallery-item10 {
	grid-row: 6 / span 2;
	grid-column: 1 / 2;
}

.gallery-item11 {
	grid-row: 6 / span 2;
	grid-column: 2 / span 2;
}

.gallery-item12 {
	grid-row: 6 / span 2;
	grid-column: 4 / 5;
}

.gallery-item13 {
	grid-row: 5 / span 3;
	grid-column: 5 / span 3;
}

.gallery-item14 {
	grid-row: 6 / span 2;
	grid-column: 8 / -1;
}

/* ////////////////////// */


.card-wrapper {
	position: relative;
	width: 100%;
	padding: 0 10px;
}

.card-wrapper:active,
.card-wrapper:hover,
.card-wrapper:focus {
	outline: none;
	border: none;
}

.card {
	width: 100%;
	height: 300px;
	border-radius: 5px 5px 0 0;
	overflow: hidden;
	position: relative;
}

.card .card-image {

	width: 100%;
	height: 100%;
}

.card .card-image img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
}

.details {
	position: relative;
	width: 100%;
	cursor: pointer;
	-webkit-transition: 0.1s;
	transition: 0.1s;
	border-radius: 0 0 5px 5px;
}


.city1 {
	background: #d4a66f;
}
.city2 {
	background: #0d86be;
}
.city3 {
	background: #214aa1;
}
.city4 {
	background: #bedcfa;
}
.city5 {
	background: #98acf8;
}
.city6 {
	background: #b088f9;
}

.city7 {
	background: #61b15a;
}
.city8 {
	background: #adce74;
}
.city9 {
	background: #5aa469;
}

.details h2 {
	color: #fff;
	text-align: left;
	padding: 1rem;
}

.details h2 span {
	font-size: 16px;
	line-height: 2;
	font-weight: 300;
	display: block;
}

.details div {
	position: absolute;
	top: 20%;
	right: 0;
	padding: 1rem;
	text-align: right;
	color: #fff;
	font-size: 2rem;
}

.carousel .slick-dots {
	bottom: -5vw;

	@media screen and (max-width: 768px) {
		bottom: -10vw;
	}
}

.carousel .slick-dots li button {
	width: 20px;
	height: 20px;
	border: 1px solid #fff;
	border-radius: 20px;
}

.carousel .slick-dots li button:before {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 10px;
	height: 10px;
	border-radius: 10px;
	content: "";
	text-align: center;
	opacity: 0.5;
	color: #000;
	background-color: #fff;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

.carousel .slick-dots li.slick-active button,
.carousel .slick-dots li:hover button {
	border-color: tomato;
}

.carousel .slick-dots li.slick-active button:before,
.carousel .slick-dots li:hover button:before {
	background-color: tomato;
	opacity: 1;
}

.carousel .slick-prev,
.carousel .slick-next {
	width: 50px;
	height: 50px;
	color:#000;
	background-color: #000;
}

.carousel .slick-prev:hover,
.carousel .slick-prev:focus,
.carousel .slick-next:hover,
.carousel .slick-next:focus {
	color: red;
	outline: none;
	background: #000;
}

.carousel .slick-prev:before,
.carousel .slick-next:before {
	color: #000;
	font-family: sans-serif;
}

.carousel .slick-next {
	right: -55px;
}

.carousel .slick-prev {
	left: -55px;
}


/* gallery css*/
.image-container {
	text-align:center;
	margin:150px;
}

.image-container h1{
	margin-bottom:64px;
}

.image-grid {
	display:grid;
	grid-gap:10px;
	grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));
	grid-auto-rows:minmax(50px, auto);
	margin:0 auto;
	max-width:1000px;
	padding:0 32px;
}

.image-item:nth-child(5){
	grid-column-end: span 2;
}

.image-item:nth-child(9){
	grid-column-end: span 2;
	grid-row-start:4;
}


.image-grid img:hover {
	transform:scale(1.1);
	transition: 1s all ease;
	cursor:pointer;
}

`
