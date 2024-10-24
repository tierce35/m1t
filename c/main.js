(
function()
{
	"use strict";

	var	inputA = document.getElementById( 'a' );
	var	outputB = document.getElementById( 'b' );

	function setOutput( n )
	{
		outputB.innerHTML = '-> ' + n;
	}

	function onUpdateInput( e )
	{
		setOutput( e.target.value );
	}

	inputA.addEventListener( 'input', onUpdateInput );
	setOutput( inputA.value );
}

)();
