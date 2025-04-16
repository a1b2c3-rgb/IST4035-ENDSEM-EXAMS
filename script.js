// GPA scale conversion
const gradeToPoint = {
  'A': 4,
  'B': 3,
  'C': 2,
  'D': 1,
  'F': 0
};

// DOM references
const courseContainer = document.getElementById('courseContainer');
const calculateBtn = document.getElementById('calculateBtn');
const addCourseBtn = document.getElementById('addCourseBtn');
const gpaResult = document.getElementById('gpaResult');

// Add new course row dynamically
addCourseBtn.addEventListener('click', () => {
  const newRow = document.createElement('div');
  newRow.classList.add('course-row');
  newRow.innerHTML = `
    <label>Course Name: <input type="text" name="course" required /></label>
    <label>Grade:
      <select name="grade" required>
        <option value="">Select</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
    </label>
  `;
  courseContainer.appendChild(newRow);
});

// GPA Calculation
calculateBtn.addEventListener('click', () => {
  const gradeSelects = document.querySelectorAll('select[name="grade"]');
  let totalPoints = 0;
  let validCount = 0;

  gradeSelects.forEach(select => {
    const grade = select.value.toUpperCase();
    if (grade in gradeToPoint) {
      totalPoints += gradeToPoint[grade];
      validCount++;
    }
  });

  // Validation
  if (validCount === 0) {
    gpaResult.textContent = 'Please enter at least one valid grade.';
    return;
  }

  const gpa = (totalPoints / validCount).toFixed(2);
  gpaResult.textContent = gpa;
});
