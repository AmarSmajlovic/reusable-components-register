class RegisterFormFirst extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
          <div class="form-container">
           <h2>User register</h2>
           <div class="form">
           <div class="input-form default">
           <input type="text" id="name">
           <label  for="name">Your Name <span class="important">*</span></label>
           <div class="alert-message">This is the description area</div>
           <div class="description">This is the description area</div>
           </div>
           <div class="input-form default">
           <input type="text" class="input" id="surname">
           <label  for="surname">Your Surname <span class="important">*</span></label>
           <div class="alert-message">This is an ERROR messagge</div>
           <div class="description">This is the description area</div>
           </div>
           <div class="input-form default">
           <input type="email" class="input" id="email">
           <label for="email">email<span class="important">*</span></label>
           <div class="alert-message">This is a SUCCESS messagge</div>
           <div class="description">This is the description area</div>
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
           <div class="container-radio">
  <div class="radio">
    <input  id="radio-1" name="radio" type="radio" checked>
    <label for="radio-1" class="radio-label">Checked</label>
  </div>

  <div class="radio">
    <input id="radio-2" name="radio" type="radio">
    <label  for="radio-2" class="radio-label">Unchecked</label>
  </div>

  <div class="radio">
    <input id="radio-3" name="radio" type="radio" disabled>
    <label for="radio-3" class="radio-label">Disabled</label>
  </div>
</div>
           </div>
          </div>
        `
    }
}

customElements.define('register-form-first',RegisterFormFirst);