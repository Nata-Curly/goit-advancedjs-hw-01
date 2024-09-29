const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

fillFromLS(feedbackForm);

feedbackForm.addEventListener('input', handleFormInput);
feedbackForm.addEventListener('submit', handleFormSubmit);

function fillFromLS(form) {
  const dataFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (dataFromLS === null) {
    return;
  }

  for (const key in dataFromLS) {
    form.elements[key].value = dataFromLS[key];
    formData[key] = dataFromLS[key];
  }
}

function handleFormInput(event) {
  const inputName = event.target.name;
  const inputValue = event.target.value.trim();

  formData[inputName] = inputValue;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch (error) {
    console.error(error);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
  formData.email = '';
  formData.message = '';
}
