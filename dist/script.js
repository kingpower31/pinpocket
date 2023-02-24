"use strict";var modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),countriesEl=Array.from(document.querySelectorAll(".country")),img=document.querySelector("#img"),countryInput=document.querySelector("#country");countryInput&&(countryInput.value="Nigeria");var openModal=function(){modal.style.display="block",overlay.style.display="block",overlay.addEventListener("click",closeModal),countriesEl.forEach((function(e){e.addEventListener("click",renderFlag)}))},closeModal=function(){modal.style.display="none",overlay.style.display="none"},renderFlag=function(e){var t=e.target.id;img.src="/images/".concat(t,".png"),countriesEl.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),countryInput.value=e.target.textContent,closeModal()},inputs=Array.from(document.querySelectorAll("input")),btn=document.querySelector("button");function handleInput(e){inputs.some((function(e){return""==e.value}))?btn.disabled=!0:btn.disabled=!1}if(inputs.forEach((function(e){e.addEventListener("keyup",handleInput)})),window.location.href.includes("confirm")){var timing,phoneNum=localStorage.getItem("pAppNum"),numEnd=phoneNum.slice(-4),endNumEl=document.querySelector(".numEnd"),countDownEl=document.querySelector(".countDown"),otpInput=document.querySelector("#otp"),time=60;endNumEl.textContent=numEnd,console.log(numEnd),timing=setInterval((function(){time--,countDownEl.textContent="".concat(time,"s"),0===time&&(clearInterval(timing),document.querySelector("#resend").innerHTML="<p> Resend Code </p>")}),1e3),otpInput.addEventListener("input",(function(e){null!==e.data&&3==e.target.value.length&&(e.target.value+="-")}))}
//# sourceMappingURL=script.js.map