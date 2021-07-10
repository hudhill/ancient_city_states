document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
  
  function handleFormSubmit(event){
    event.preventDefault();
    const cityStateItem = createCityStateItem(event.target);
    const cityStateList = document.querySelector("#city-state-list");
    cityStateList.appendChild(cityStateItem);
    event.target.reset();
  }

  function createCityStateItem(form){

    const cityStateItem = document.createElement('li');
    cityStateItem.classList.add("city-state-item");

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    cityStateItem.appendChild(name);
    const culture = document.createElement('h3');
    culture.textContent = `(${form.culture.value})`;
    cityStateItem.appendChild(culture);
    const timePeriod = document.createElement('p');
    timePeriod.textContent = `Founded in the year ${form.founding.value} BCE`;
    cityStateItem.appendChild(timePeriod);
    const location = document.createElement('p');
    location.textContent = `in the region of modern day ${form.region.value}`;
    cityStateItem.appendChild(location);

    return cityStateItem;
  }

  function handleDeleteAllClick(){
    const cityStateList = document.querySelector("#city-state-list");
    cityStateList.innerHTML = "";
  }

});