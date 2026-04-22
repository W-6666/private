javascript
document.getElementById('contactForm').addEventListener('submit',
function(e) {
    e.preventDefault(); // 阻止默认提交
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;

    // 简单验证
    if (name && email && email.includes('@')) {
        alert('消息已发送！我们将在24小时内回复您。');
        this.reset(); // 清空表单
    } else {
        alert('请填写完整信息（姓名和邮箱）');
    }
});