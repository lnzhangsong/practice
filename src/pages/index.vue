<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>Hello World</h1>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
definePageMeta({
	title: "My home page",
});
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
	},
	title: "My App",
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
	charset: "utf-8",
	meta: [{ name: "description", content: "My amazing site." }],
	bodyAttrs: {
		class: "test",
		id: "test",
	},
});
</script>
