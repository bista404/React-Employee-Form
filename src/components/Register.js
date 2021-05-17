import '../App.css'
function Register(props){
return(
    
    <div class="container">
        <form>

        <div class="row mb-3">
                    <label for="fname" class="col-sm-2 col-form-label">First Name</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="fname" required/>
                    </div>
        </div>

        <div class="row mb-3">
                    <label for="lname" class="col-sm-2 col-form-label">Last Name</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="lname" required/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-6">
                        <input type="email" class="form-control" id="inputEmail3" pattern="a-z@.com"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="contact" class="col-sm-2 col-form-label">Contact</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="contact" required/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="address" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="address"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="date" class="col-sm-2 col-form-label">Date of birth</label>
                    <div class="col-sm-6">
                        <input type="date" class="form-control" id="date"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="country" class="col-sm-2 col-form-label">Country</label>
                    <div class="col-sm-10">
                        <select class="form-select form-select-lg mb-10" id="countrylist">
          <option selected>Country</option>
          <option value="1">Nepal</option>
          <option value="2">India</option>
          <option value="3">Bhutan</option>
          <option value="4">Pakistan</option>
          <option value="5">US</option>
      
      
        </select>
                    </div>
                </div>  

        <div class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label class="form-check-label" for="gridRadios1">
                      Male
                    </label>
                    
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                            <label class="form-check-label" for="gridRadios2">
                      Female
                    </label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                            <label class="form-check-label" for="gridRadios3">
                     Rather not specify
                    </label>
                        </div>
                </div>           
            </div>
            <div className="form-group text-left" >
                    <label for="Skill">Skill</label><br />
                    <input type="checkbox" value=""/>HTML
                    <input type="checkbox" value="" />CSS
                    <input type="checkbox" value="" />JS
                </div>

                <label for="formFileSm" class="form-label">Upload your image</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file" /> <br/>

                <button type="submit" class="btn btn-success">Upload</button>

        </form>
    </div>
        

)

}
export default Register;

    