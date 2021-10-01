AOS.init();
// signup design logic
$(document).ready(()=>{
    $('#join').click(()=>{
        $('#prompt-message').fadeOut()
        $('#membership-section').fadeIn()
        $('#learn-reg-section').fadeOut()
    }),
    $('#learn').click(()=>{
        $('#prompt-message').fadeOut()
        $('#membership-section').fadeOut()
        $('#bootcamp-reg-section').fadeIn()
    }),
    $('#close_btn_2').click(()=>{
        $('#prompt-message').fadeIn()
        $('#membership-section').fadeOut()
        $('#bootcamp-reg-section').hide()
        console.log($('#bootcamp-reg-section'))
    })
    $('#close_btn').click(()=>{
        $('#prompt-message').fadeIn()
        $('#membership-section').hide()
        $('#bootcamp-reg-section').fadeOut()
    }),
    $('#r-learn-btn').click(()=>{
        $('#prompt-message').fadeOut()
        $('#membership-section').fadeOut()
        $('#bootcamp-reg-section').fadeIn()
    }),
    $('#r-join-btn').click(()=>{
        $('#prompt-message').fadeOut()
        $('#bootcamp-reg-section').fadeOut()
        $('#membership-section').fadeIn()
        
    })

})