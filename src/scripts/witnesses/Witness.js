export const witness = (witnessObject) => {
  return `<div class="card w-60 text-center"><section class="witness-card">
    <h3 class="witness-name">Witness Name:
    ${witnessObject.name}
    </h3>
    Witness Statement:<p>${witnessObject.statements}</p>
    </div>`;
};
