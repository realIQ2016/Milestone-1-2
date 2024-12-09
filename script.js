var toggleSkillsBtn = document.getElementById('toggle-skills');
var skills = document.getElementById('skills-section');
toggleSkillsBtn.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'Block';
    }
    else {
        skills.style.display = 'none';
    }
});
