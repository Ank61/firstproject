class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =`

        <div class='Header'>
            <a href="./index.html">
            <img src="./footlogo2.png"  class="logo" ></img></a>
            <a href="./ourhotel.html" >OUR HOTELS</a>
            <a href="./dining.html" >DINING</a>

            <a href="./wedding.html" >WEDDING</a>
            <a href="./giftcard.html" >GIFT CARD</a>
            <a href="./tajholiday.html" >TAJ HOLIDAYS</a>
            <a href="./contactus.html" >CONTACT US</a>

            <a href="./booking.html" >FIND BOOKING</a>
            <a href="./ourpartners.html" >OUR PARTNERS</a>
            <a href="./signin.html" >SIGN IN</a> &nbsp; &nbsp;&nbsp;&nbsp;
            <a class='button1' href="./signin.html">Book a Stay</a>
            </div>    
        `
    }}customElements.define("my-header", MyHeader);
    class Myfooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =`
        <div class="mainfooter">
    <div class="subdiv">
        <p>Loyalty Programs &nbsp; <i class="fa-solid fa-plus"></i></p>
        <hr></hr>
        <p class="hotel">©2022 The Indian Hotels Company Limited. All Rights Reserved. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  Our Brands:</p>
        <img src="./footlogo4.png" class="image4"></img>
        <img src="./footlogo2.png" class="image2"></img>
        <img src="./footlogo3.png" class="image3"></img>
        <img src="./footlogo5.png" class="image5"></img>
        <img src="./footlogo7.png"  class="image7"></img>

        
    </div>
    </div>
        `
    }}customElements.define("my-footer", Myfooter);


   