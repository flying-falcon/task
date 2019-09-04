import React from 'react';

function Filter() {
    return (
      <div>      
  <h2 style={{letterSpacing: "0.05em"}}>Your Jobs</h2>
  <div class="jobrow2">
      <div class="category23">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" style={{background: "#ffffff",color: "#000000"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Content Categories
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">All Content Categories</a>
              <a class="dropdown-item" href="#">All Industries</a>
              <a class="dropdown-item" href="#">Status</a>
            </div>
          </div>
      </div>
      <div class="category23">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" style={{background: "#ffffff",color: "#000000"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              All Industries
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">All Content Categories</a>
              <a class="dropdown-item" href="#">All Industries</a>
              <a class="dropdown-item" href="#">Status</a>
            </div>
          </div>
      </div>
      <div class="category23">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" style={{background: "#ffffff",color: "#000000"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Status
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">All Content Categories</a>
              <a class="dropdown-item" href="#">All Industries</a>
              <a class="dropdown-item" href="#">Status</a>
            </div>
          </div>
      </div>
      <div class="category23">
          Clear All
      </div>
      <div class="category24">
          Displaying 1-8 of 123 Jobs
      </div>
      <div class="category24">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" style={{background: "#ffffff",color: "#000000"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Least Time First
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">All Content Categories</a>
              <a class="dropdown-item" href="#">All Industries</a>
              <a class="dropdown-item" href="#">Status</a>
            </div>
          </div>
      </div>
  </div>
</div>
  );
}

export default Filter;