class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =`

        <div class='Header'>
        <div class="log">
            <a href="./index.html">
            <img src="./footlogo2.png"  class="logo" ></img></a>
        </div>
            <a href="./ourhotel.html" >OUR HOTELS</a>
            <a href="./dining.html" >DINING</a>

            <a href="./wedding.html" >WEDDING</a>
            <a href="./giftcard.html" >GIFT CARD</a>
            <a href="./tajholiday.html" >TAJ HOLIDAYS</a>
            <a href="./contactus.html" >CONTACT US</a>

            <a href="./booking.html" >FIND BOOKING</a>
            <a href="./ourpartners.html" >OUR PARTNERS</a>
            <a href="./signin.html" >SIGN IN</a> &nbsp; &nbsp;&nbsp;&nbsp;
            <div class="hed">
            <button class="btn btn-warning "
                    data-toggle = 'modal'
                    data-target = '#my_division'>Register</button>
        </div>

        <div id = "my_division" 
             class="modal fade"
             data-keyboard = 'false'
             data-backdrop = 'static'>
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="h5 modal-title">Registration Form</p>
                        <button data-dismiss = 'modal' class="close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label>Username:</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Email:</label>
                                <input type="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="number" class="form-control">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success">Save </button>
                        <button class="btn btn-danger" data-dismiss = 'modal'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
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


   