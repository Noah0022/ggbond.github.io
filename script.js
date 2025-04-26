// 交互动画
document.addEventListener('DOMContentLoaded', () => {
    // 滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .skill-item').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // 导航栏交互
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(n => n.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // 技能标签悬停效果
    document.querySelectorAll('.skill-item').forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.transform = 'scale(1.1) rotate(3deg)';
        });
        skill.addEventListener('mouseout', () => {
            skill.style.transform = 'scale(1) rotate(0)';
        });
    });
});
