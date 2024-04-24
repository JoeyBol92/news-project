<script>
    import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte'

    import "../app.css"; 
    
    onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
  </script>
  
  <Header/>
  <slot />