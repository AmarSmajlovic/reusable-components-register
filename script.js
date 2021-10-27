class RegisterFormFirst extends HTMLElement{
    connectedCallback(){
      this.innerHTML = `
          <div class="form-container">
          <div class="form">
          <h2>User register</h2>
           <div class="input-form default">
           <input type="text" id="name">
           <label  for="name">Your Name <span class="important">*</span></label>
           <div class="alert-message">This is the description area</div>
           
           </div>
           <div class="input-form default">
           <input type="text" class="input" id="surname">
           <label  for="surname">Your Surname <span class="important">*</span></label>
           <div class="alert-message">This is an ERROR messagge</div>
 
           </div>
           <div class="input-form default">
           <input type="email" class="input" id="email">
           <label for="email">email<span class="important">*</span></label>
           <div class="alert-message">This is a SUCCESS messagge</div>
           
           </div>
           <div class="input-form default">
           <input  type="password" class="input" name="password" id="password">
           <label  for="password">Password<span class="important">*</span></label>
           </div>
           <div class="input-form error">
           <input type="password" class="input" name="password" id="confirm-password">
           <label  for="confirm-password">Confirm Password<span class="important">*</span></label>
           <div class="alert-message">Password does NOT match</div>
           </div>
           <div class="checkbox-form">
           <label class="switch" for="checkbox-terms">
           <input  type="checkbox" id="checkbox-terms" />
           <div class="slider round"></div>
           </label>
           <p>I accept the general terms of use</p>
           </div>
           <div class="checkbox-form">
           <label class="switch" for="checkbox-privacy">
           <input  type="checkbox" id="checkbox-privacy" />
           <div class="slider round"></div>
           </label>
           <p>Privacy</p>
           </div>
           <div class="buttons">
           <button class="btn-outline large">CANCEL</button>
           <button class="btn large">NEXT STEP</button>
           </div>
  `
}
}

customElements.define('register-form-first',RegisterFormFirst);

class RegisterFormSecond extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <div class="form-container">
        <div class="form">
           <div class="input-form default">
           <select name="country" id="country">
           <option>Select Country</option>
           <option>United States</option>
           </select>
           <label  for="country">Country</label>
           </div>
           <div class="input-form default">
           <select name="city" id="city">
           <option>Select City</option>
           <option>New York</option>
           </select>
           <label  for="city">City</label>
           </div>
           <div class="input-form default">
           <input type="text" class="input" id="zip-code">
           <label  for="zip-code">Zip Code</label>
           </div>
           <div class="adress-container">
           <div class="input-form default">
           <input type="text" class="input" id="adress">
           <label  for="adress">Adress</label>
           </div>
           <div class="input-form default">
           <input type="text" class="input" id="number">
           <label  for="number">Number</label>
           </div>
           </div>
           <div class="input-form default">
           <input type="text" class="input" id="id-card">
           <label  for="id-card">Personal ID Card</label>
           </div>
        </div>
        <div class="form">
        <div class="input-form default">
        <input type="text" class="input" id="id-card">
        <label  for="id-card">Date of birth</label>
        </div>
        <div class="container-radio">
        <div class="radio">
          <input  id="male-radio" name="male-radio" type="radio">
          <label for="male-radio" class="radio-label">Male</label>
        </div>
        <div class="radio">
          <input id="female-radio" name="female-radio" type="radio">
          <label  for="female-radio" class="radio-label">Female</label>
        </div>
        <div class="radio">
          <input id="other-radio" name="other-radio" type="radio">
          <label for="other-radio" class="radio-label">Other</label>
        </div>
      </div>
      <div class="input-form default">
      <input type="text" class="input" id="phone-number">
      <label  for="phone-numer">Phone Number</label>
      </div>
      <div class="input-form default">
      <input type="text" class="input" id="account-number">
      <label  for="account-numer">Account Number</label>
      </div>
      <div class="input-form default">
      <input type="text" class="input" id="account-number">
      <label  for="account-numer">Account Number</label>
      </div>
      <button class="btn medium" id="register-btn">REGISTER</button>
      </div>
        </div>
    </div>
    `
  }
}

customElements.define('register-form-second',RegisterFormSecond);