<script>
	export let comments;
	export let username;

	let newComments = comments;
	let useNew = false;

	let spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"


	function valid(field) {
		var state = {
			saved: true,
			requirements: {
				Description: {
					required: true,
					maxlength: 140
				},
				Files: {},
			}
		};

		if (!state.requirements[field.name]) {
			return true;
		}

		// required
		if (state.requirements[field.name].required) {
			if (field.tagName.toLowerCase() == 'input' && field.value.length == 0) {
				field.classList.add('error');
				return false;
			} else if (field.value === undefined || field.value === '') {
				field.classList.add('error');
				return false;
			}
		}

		// max length
		if (state.requirements[field.name].maxlength) {
			if (field.value.length > state.requirements[field.name].maxlength) {
				field.classList.add('error');
				return false;
			}
		}

		field.classList.remove('error');
		return true;
	}

	function submit() {
		newComments = [...comments, {
			name: username,
			message: document.querySelector("input[name='Description'").value,
			date: new Date().toISOString()
		}]
		useNew = true
		document.querySelector('input[name="Description"]').value = "";
	}
</script>

{#each useNew ? newComments : comments as c}
	<div class="cmt">
		<div>
			<div>{c.name}{@html spaces}{new Date(c.date).toLocaleString()}</div>
		</div>
		<div>{c.message}</div>
	</div>
{/each}

<form id="theForm" on:submit|preventDefault={() => {
	if (valid(document.querySelector('input[name="Description"]'))) {
		submit()
	}
}}>
    <span>
        <input 
            name="Description" 
			type="text"
		>
		<button type="submit">Submit</button>

	</span>
</form>

<style>
	.cmt {
		background-color: #FFF;
		padding: 12px;
	}
</style>