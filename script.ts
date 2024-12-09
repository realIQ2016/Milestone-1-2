const toggleSkillsBtn = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills-section') as HTMLButtonElement

toggleSkillsBtn.addEventListener('click',()=>{
  if(skills.style.display === 'none'){
    skills.style.display = 'Block'
  }else{skills.style.display = 'none'
    
  }
}
);
