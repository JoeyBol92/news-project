<script>

    let contentRef;
    // Function for Editor's pick scroll
	const scrollTo = (scrollOffset) => {
    if (contentRef) {
        contentRef.scrollBy({
            left: scrollOffset,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    }
}; 
</script>

<section class="max-w-7xl max-[768px]:px-[25px] mx-auto py-16">
    <header>

        <!-- Desktop -->
        <div class="max-[767px]:hidden grid md:grid-cols-3 gap-x-4 justify-around">
            <div class="md:col-span-2 relative">
                <div class="absolute inset-0">
                    <img 
                        src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:1110/height:624/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg" 
                        alt=""
                        class="rounded-[24px] w-full h-full object-cover "
                    >
                </div>
                <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-[24px]">
                    <h2 class="text-white text-4xl font-bold text-center">Title 1</h2>
                </div>
            </div>
            <div class="hidden md:block col-span-1">
                <div class="flex flex-col gap-y-4">
                    <div class="relative">   
                        <img 
                            src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:555/height:312/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg" 
                            alt=""
                            class="rounded-[24px] w-full"
                        >
                        <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-[24px]">
                            <h2 class="text-white text-2xl font-bold text-center">Title 2</h2>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <img 
                            src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:555/height:312/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg" 
                            alt=""
                            class="rounded-[24px] w-full"
                        >
                        <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-[24px]">
                            <h2 class="text-white text-2xl font-bold text-center">Title 3</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="min-[768px]:hidden grid grid-cols-1 justify-around">
            <div class="col-span-1 relative">
                <div class=" inset-0">
                    <img 
                        src="https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/watermark:proshots/width:1110/height:624/plain/https%3A%2F%2Fs3-newsifier.ams3.digitaloceanspaces.com%2Fwww.ajaxshowtime.com%2Fimages%2F2024-04%2Fajax-fc-twente-661c467eca907.jpg" 
                        alt=""
                        class="rounded-[24px] w-full h-full object-cover "
                    >
                </div>
                <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-[24px]">
                    <h2 class="text-white text-4xl font-bold text-center">Title 1</h2>
                </div>
            </div>

            
    </header>
</section>


