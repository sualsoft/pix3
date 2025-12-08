<template>
    <section
        ref="targetSection"
        class="overflow-hidden bg-white px-4 py-16 font-sans transition-all duration-1000 ease-out sm:px-6 lg:px-8"
        :class="
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        "
    >
        <div class="mx-auto max-w-7xl">
            <div
                class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24"
            >
                <div
                    class="transition-all delay-200 duration-1000"
                    :class="
                        isVisible
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-10 opacity-0'
                    "
                >
                    <div class="group mb-8 flex items-center">
                        <span
                            class="mr-4 h-8 w-1.5 bg-[#50aceb] transition-all duration-300 group-hover:h-12 group-hover:bg-sky-400"
                        ></span>
                        <h2
                            class="text-3xl font-bold text-black transition-colors duration-300 group-hover:text-gray-800"
                        >
                            Qu’est-ce qu’un timelapse ?
                        </h2>
                    </div>

                    <div
                        class="space-y-6 text-justify leading-relaxed text-gray-700"
                    >
                        <p>
                            Le timelapse est une technique vidéo qui consiste à
                            capturer le passage du temps sous forme accélérée.
                            Cela se réalise en prenant une série de photos à
                            intervalles réguliers, pouvant varier de quelques
                            secondes à plusieurs heures, puis en les assemblant
                            pour créer une séquence vidéo. Le résultat est une
                            impression visuelle spectaculaire, où le temps
                            semble s'écouler à toute vitesse.
                        </p>
                        <p>
                            Cette méthode est idéale pour observer des
                            transformations sur une longue durée ou des
                            phénomènes imperceptibles à l'œil nu. Elle est
                            notamment prisée dans le suivi de chantiers,
                            permettant de documenter chaque étape de la
                            construction d'un bâtiment, de la planification à la
                            livraison.
                        </p>
                        <p>
                            Le timelapse offre une perspective fascinante en
                            condensant de longues périodes en quelques secondes
                            ou minutes, révélant ainsi l'évolution du temps
                            d'une manière captivante.
                        </p>
                    </div>
                </div>

                <div
                    class="perspective-1000 relative mt-10 h-[500px] w-full lg:mt-0"
                >
                    <div
                        class="absolute top-0 right-0 w-3/5 rotate-3 transform cursor-pointer transition-all duration-500 ease-out hover:z-50 hover:scale-110 hover:rotate-0 hover:shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Construction Site Early Stage"
                            class="h-auto w-full border-4 border-white shadow-lg"
                        />
                    </div>

                    <div
                        class="absolute top-1/4 left-1/4 w-3/5 -rotate-2 transform cursor-pointer transition-all duration-500 ease-out hover:z-50 hover:scale-110 hover:rotate-0 hover:shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Construction Site Crane"
                            class="h-auto w-full border-4 border-white shadow-xl"
                        />
                    </div>

                    <div
                        class="absolute bottom-0 left-0 w-3/5 rotate-6 transform cursor-pointer transition-all duration-500 ease-out hover:z-50 hover:scale-110 hover:rotate-0 hover:shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Construction Site Finished"
                            class="h-auto w-full border-4 border-white shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const targetSection = ref(null);
const isVisible = ref(false);

onMounted(() => {
    // Simple Intersection Observer to trigger entrance animation
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                // Optional: unobserve after triggering once so it doesn't hide again
                observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0.2, // Trigger when 20% of the section is visible
        },
    );

    if (targetSection.value) {
        observer.observe(targetSection.value);
    }
});
</script>

<style scoped>
/* Optional: Perspective for 3D feel if needed, though Tailwind transform utilities handle most of it */
.perspective-1000 {
    perspective: 1000px;
}
</style>
