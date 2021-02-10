export const facility = (facilityObject) => {
  return `<div class="card w-60 text-center">
  <div class="card-body">
    
    <h1 class = "facility-card">Name: ${facilityObject.facilityName}</h1>
    <ul class="card-text">
        <li>Security Level: ${facilityObject.securityLevel}</li>
        <li>Capacity: ${facilityObject.capacity}</li>
    </ul>
    </div>`;
};


