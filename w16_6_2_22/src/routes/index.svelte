<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>CodingPhase Workshop 16 &ndash; 6/2/2022</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Profile Editor UI</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	h2, h3 {
		font-size: 3rem;
		margin: 0 0 1rem;
		line-height: 1;
	}

	h3 {
		font-size: 2rem;
		color: var(--primary); 
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	input[type='file'] {
		display: none;
	}

	.card {
		width: 100%;
		border-radius: 2rem;
		display: flex;
		background: white;
		filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
	}
	.form,
	.preview {
		flex: 0 0 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 2rem;
	}

	.form {
		border-right: 5px solid #000;
	}

	.input {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
	}

	.form input,
	.form textarea {
		width: 100%;
		border-radius: 0.5rem;
		border: 1px solid rgba(0,0,0,0.6);
		padding: 0.5rem;
	}
	.avatar {

		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		margin: 1rem;
		position: relative;
	}

	.avatar img {
		width: 100%;
		height: auto;
	}

	.avatar .overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.avatar:hover .overlay {
		opacity: 1;
	}

	.avatar .overlay p {
		color: rgba(255, 255, 255, 0.86);
		font-size: 2rem;
		font-weight: 600;
		text-align: center;
	}

	.form label {
		margin-left: 1rem;
		font-weight: 600;
	}
	textarea {
		height: 200px;
		resize: none;
	}
</style>
