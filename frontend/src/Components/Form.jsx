
export const Form = () => {
  return (
    <div class="form-container" id="awardForm">
      <h3>Add/Edit Award</h3>
      <input type="text" id="awardTitle" placeholder="Award Title" value="Fitness Champion"/>
      <input type="text" id="awardDescription" placeholder="Award Description" value="Complete 10 workouts."/>
      <input type="number" id="awardRequirement" placeholder="Requirements (e.g., 10)" value="10"/>
      <button>Submit</button>
      <button class="clear-button">Clear</button>
    </div>
  )
}
