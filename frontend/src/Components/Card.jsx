

const Card = () => {
  return (
    <div id="awardsContainer">
      <div class="award-card" id="award-1">
        <span class="delete-icon">&times;</span>
        <h3>Fitness Champion</h3>
        <p>Complete 10 workouts.</p>
        <div class="progress-bar">
          <div class="progress" style="width: 50%;"></div>
        </div>
        <button class="update-button">Update Progress</button>
        <button class="update-button">Edit</button>
      </div>

      <div class="award-card" id="award-2">
        <span class="delete-icon">&times;</span>
        <h3>Coding Guru</h3>
        <p>Solve 5 challenges.</p>
        <div class="progress-bar">
          <div class="progress" style="width: 40%;"></div>
        </div>
        <button class="update-button">Update Progress</button>
        <button class="update-button">Edit</button>
      </div>
    </div>
    
  )
}

export default Card