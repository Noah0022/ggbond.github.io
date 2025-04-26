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

    // 新增角色互动
    const character = document.getElementById('mainCharacter');
    let isMoving = false;
    
    character.addEventListener('mouseenter', () => {
        character.style.transform = 'rotate(10deg) scale(1.1)';
        character.style.filter = 'drop-shadow(0 0 8px rgba(255,107,107,0.5))';
    });
    
    character.addEventListener('mouseleave', () => {
        character.style.transform = 'rotate(0) scale(1)';
        character.style.filter = 'none';
    });
    
    // 全息投影互动
    // 更新互动按钮逻辑
    document.querySelectorAll('.tech-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有激活状态
            document.querySelectorAll('.tech-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const techType = this.dataset.tech;
            const hologram = document.getElementById('techHologram');
            const content = hologram.querySelector('.hologram-content');
            
            // 根据技术类型显示不同内容
            const techData = {
                rust: {
                    color: "#FF6B6B",
                    text: "🦀 核心能力：<br>• 超能装备驱动开发<br>• 高并发系统架构<br>• 零成本抽象设计"
                },
                quantum: {
                    color: "#4CA1AF",
                    text: "⚛️ 量子优势：<br>• 五灵元素并行计算<br>• 超空间数据加密<br>• 分布式能源管理"
                },
                iot: {
                    color: "#FFD93D",
                    text: "🌐 物联专长：<br>• 百万级设备连接<br>• 实时数据流处理<br>• 智能防御协议"
                }
            };
            
            hologram.style.background = `linear-gradient(45deg, 
                ${techData[techType].color} 0%, 
                ${techData[techType].color}33 100%)`;
                
            content.innerHTML = techData[techType].text;
            content.style.animation = 'hologramPop 0.5s ease';
        });
    });
    
    // 初始化默认显示
    document.querySelector('.tech-btn[data-tech="rust"]').click();
    
    // 添加鼠标轨迹特效
    document.addEventListener('mousemove', (e) => {
        if(!isMoving) {
            createTrail(e.clientX, e.clientY);
            isMoving = true;
            setTimeout(() => isMoving = false, 50);
        }
    });
    
    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 500);
    }
});
