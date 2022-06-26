import {
  getStateColorNameById,
  getStateHistoryByEquipmentId,
  getStateNameById,
} from '../../assets/data-acess'

export function EquipmentHistoryCard(props) {
  const states = getStateHistoryByEquipmentId(props.equipmentId)

  return states.map((states, i) => (
    <>
      <div
        className="card"
        key={i}
        color={getStateColorNameById(states.equipmentStateId)}
      >
        Data:{' '}
        {new Date(states.date).toLocaleDateString() +
          ' ' +
          new Date(states.date).toLocaleTimeString()}
        <br />
        Status: {getStateNameById(states.equipmentStateId)}
      </div>

      <style jsx>{`
        .card[color="red"] {
          --color: #e74c3c;
          --background: #ffa399;
        }

        .card[color="green"] {
          --color: #2ecc71;
          --background: #a2fac8;

        }

        .card[color="yellow"] {
          --color: #f1c40f;
          --background: #fce895;

        }

        .card {
          width: 60%;
          margin: 1rem;
          padding: 1rem;
          border-left: 8px solid var(--color);
          background: var(--background);
        }
      `}</style>
    </>
  ))
}
