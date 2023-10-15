import React from 'react'

const Loginbox = () => {
  return (
    <div className="main">
        <input type="checkbox" id='chk' aria-hidden='true' />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden='true'>SIGN UP</label>
            <input type="text" name='txt' placeholder='username' required=""/>
            <input type="email" name='email' placeholder='email' required=""/>
            <input type="password" name="pswd" placeholder="Password" required=""/>
            <button>Sign Up</button>
          </form>
        </div>

        <div className="login">
          <form>
          <label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
          </form>
        </div>
      </div>
  )
}

export default Loginbox