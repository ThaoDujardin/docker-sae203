const tableau   = document.getElementById  ('tableau');
const cellules  = document.querySelectorAll('[data-cell]');
const status    = document.getElementById  ('status');

let pointX = 0;
let pointO = 0;

let joueurActuel = '❌';
let etatPartie   = ['', '', '', '', '', '', '', '', ''];

cellules.forEach(cell =>{
	cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e)
{
	const cell  = e.target;
	const index = Array.from(cellules).indexOf(cell);

	if (etatPartie[index] !== '') return;

	cell.textContent = joueurActuel;
	etatPartie[index] = joueurActuel;

	if ( aGagne() )
	{
		status.textContent = `Le Joueur ${joueurActuel} à gagné !! Revanche !`;

		if (joueurActuel == '❌'){ pointX++; }
		else{ pointO++; }

		statusJoueurs.textContent = `Points du joueur ❌ : ${pointX} | Points du joueur ⭕️ : ${pointO}`;

		cellules.forEach
		(cell =>
			{
				cell.removeEventListener('click', handleClick);
			},
		);
		setTimeout(resetPartie, 1500);
	}
	else if (etatPartie.every(cell => cell !== ''))
	{
		status.textContent = "Egalité ! Recommencez !";
		setTimeout(resetPartie, 1500);
	}
	else
	{
		joueurActuel = joueurActuel === '❌' ? '⭕️' : '❌';
		status.textContent = `Au tour du joueur : ${joueurActuel}`;
	}

	// Écoute les clics sur les cellules de la grille
	cellules.forEach(cell =>
	{
		cell.addEventListener('click', function()
		{
			// Vérifie si la cellule est vide et si c'est le tour du joueur actuel
			if (cell.textContent === '' && joueurActuel === player1Name)
			{
				const index = Array.from(cellules).indexOf(cell);
				const move = {
					player: player1Name,
					index: index
				};
				socket.emit('move', move); // Envoie le mouvement au serveur
			}
		});
	});
}

function aGagne()
{
	const winConditions =
	[
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
		[0, 4, 8], [2, 4, 6]             // Diagonales
	];

	return winConditions.some(condition => {
		const [a, b, c] = condition;
		return etatPartie[a] && etatPartie[a] === etatPartie[b] && etatPartie[a] === etatPartie[c];
	});
}

function resetPartie()
{
	joueurActuel = '❌';
	etatPartie = ['', '', '', '', '', '', '', '', ''];
	status.textContent = `Au tour du joueur : ${joueurActuel}`;
	

	cellules.forEach(cell => {
		cell.textContent = ''; // Réinitialiser le contenu des cellules
		cell.addEventListener('click', handleClick, { once: true });
	});

	renderBoard(); // Si nécessaire, appeler renderBoard() pour réinitialiser l'affichage
}