import styled from 'styled-components'

export const StyledEmbed = styled.div `

  width: 80%;
  height: 80vmin;
  display: block;
  overflow-y: scroll;

  body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    background-color: white;
  }

a {
color:#7dad41;
	font-weight:700;
}

.embed-responsive-item {
    height: 80vmin;
    width: 80%;
    overflow-y: scroll;
    border: 3px inset gray;
    background-color: #B2D8B2;
}

#ess-wrapper {
	min-height: 550px;
	width:100%;
	max-width:980px;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	border: 0px solid #333;
    font-family:Open Sans, Helvetica, sans-serif;
	padding:0;
	margin-top:0px;
    
}

#title h1 {
	font-size:32px;
    text-align:center;
    
}
#title h2 {
	font-size:28px;
	text-align:center;
	color:#2d6318;
}

.ess-toptitle {
    background-color:#fff;
    width:100%;
    position:relative;
	height:36px;
}
.ess-toptitle h1 {
    font-size:18px;
    font-weight:bold;
    color:#333;
    margin-left:30px;
	padding:6px 0 0 0;
}

.dropbtn {
    background-image:url(https://ess-ops-lms.s3.amazonaws.com/lms/rul/amhc/images/resourse_btn_bkg.jpg);
    background-repeat:repeat-x;
    color:#fff;
    padding:3px 30px;
    font-size: 16px;
    border: 1px #666 solid;
    border-radius:6px;
}


.dropdown {
    position: absolute;
    right:30px;
    top:3px;
    display: inline-block;
}


.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 220px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius:6px;
    z-index: 1;
}


.dropdown-content a {
    color: #333;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size:12px;
    line-height:120%;
    font-weight:400;
}


.dropdown-content a:hover {background-color: #ddd;}


.dropdown:hover .dropdown-content {display: block;}

 
.dropdown:hover .dropbtn {background-color: #3e8e41;} 

.ess-content{
    padding: 10px 80px 15px;
    color:#333333;
    font-size:18px;
    line-height:160%;
    
}

h1 {
    font-weight:400;
    font-size:18px;
    padding-top:0;
    margin-top:0;
    color:#333333;
}

h2 {
    font-weight:700;
    font-size:18px;
}

.ess-content h1, .ess-content-xtra h1 {
    font-size:20px;
    font-weight:700;
    color:#333333;
	text-align:center
}

.ess-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    background-color: #cacaca;
    text-align: center;
    height: 25px;
    padding-top: 3px;
}

ul li{
    line-height:150%;
    margin-bottom:12px;
}

.answerbtns{
    position:absolute;
    top:200px;
    left:170px;
    background-color:#333333;
    border-radius: 8px;
    border:1px #333 solid;
    font-family:"Open Sans", Helvetica, sans serif;
    padding:20px;
    text-align:center;
    color:#fff;
    width:600px;   
    
}

.close a {
    color:#7dad41;
    font-weight:700;
	clear:both;
}

.definitions {
    list-style:none;
    padding:0;
    margin:0;
}

.definitions li {
    float:left;
}

.def_btn{
   background-color:#669543;
	border-radius:6px;
	border:1px solid #333333;
	display:flex;
    align-items: center;
  justify-content: center;
	cursor:pointer;
	color:#ffffff;
	font-family:Open Sans, Helvetica, sans serif;
	font-size:15px;
    line-height:120%;
	font-weight:bold;
	padding:10px;
	text-decoration:none;
	text-align:center;
    width:130px;
    margin:5px;
    height:100px;
}
 
.button {
	width:80%;
   margin:0 auto;
}

@media only screen and (max-width: 768px) {
    #ess-wrapper {
	height: auto;
	width:100%;
    max-width: 800px;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	border: 1px solid #333;
    font-family:Verdana, Arial, Helvetica, sans-serif;
    font-size:15px;
    line-height:150%;
}

.dropdown {
    position: absolute;
    top:30px;
    right:10px;
    display: inline-block;
}

.ess-content, .ess-content-xtra {
    padding: 10px 30px 30px;
    font-size:15px;
    line-height:150%;
}

.ess-toptitle {
   width:100%;
    height:60px;
    padding-top:5px;
    margin:0;
    position:relative;
}

.ess-toptitle h1 {
    font-size:14px;
    margin-left:5px;
}

.answerbtns {
    position:relative;
    top:0;
    left:0;
    background-color:#333333;
    border-radius: 8px;
    border:1px #333 solid;
    font-family:"Open Sans", Helvetica, sans serif;
    padding:20px;
    text-align:center;
    color:#ffffff;
    width:91%;
    margin-left:0px;
    
}

.definitions li {
    float:none;
}

.def_btn{
   background-color:#669543;
	border-radius:6px;
	border:1px solid #333333;
	display:flex;
    align-items: center;
  justify-content: center;
	cursor:pointer;
	color:#ffffff;
	font-family:Open Sans, Helvetica, sans serif;
	font-size:15px;
    line-height:120%;
	font-weight:bold;
	padding:10px;
	text-decoration:none;
	text-align:center;
    width:93%;
    margin:5px;
    height:40px;

}

.ess-content-xtra {
   line-height:160%;    
}

html, body {
    position:relative;
    margin:0;
    padding:0;
    overflow:auto; 
}

.ess-footer {
    position: fixed;
    padding:20px 0;
}

#ess-wrapper {
    padding-bottom:40px;
}
	
}

@media only screen and (max-width: 508px) {
    
.button li a {
	float:none;
	width:100%;
}
}
`