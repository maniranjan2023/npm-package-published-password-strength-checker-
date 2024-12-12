// Password strength checker function
function checkPasswordStrength(password) {
    let strength = 0;
  
    // Criteria for password strength
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 8;
  
    // Increment strength score for each condition met
    if (hasLowercase) strength++;
    if (hasUppercase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;
    if (hasMinLength) strength++;
  
    // Determine strength level
    if (strength === 5) return "Strong";
    if (strength >= 3) return "Moderate";
    return "Weak";
  }
  
  module.exports = checkPasswordStrength ;
  