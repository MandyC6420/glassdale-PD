export const facility = (facilityObject) => {
  return `
    <section class = "facility-card">
    <h1>Name: ${facilityObject.facilityName}</h1>
    <ul>
        <li>Security Level: ${facilityObject.securityLevel}</li>
        <li>Capacity: ${facilityObject.capacity}</li>
    </ul>
    </section>`;
};
