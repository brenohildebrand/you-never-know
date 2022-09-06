<script>
    const dayOfTheWeek = new Date().getDay();
</script>

{#if dayOfTheWeek ===  0}
    <p>Sunday</p>
{:else if dayOfTheWeek === 1}
    <p>Monday</p>
{:else if dayOfTheWeek === 2}
    <p>Tuesday</p>
{:else if dayOfTheWeek === 3}
    <p>Wednesday</p>
{:else if dayOfTheWeek === 4}
    <p>Thursday</p>
{:else if dayOfTheWeek === 5}
    <p>Friday</p>
{:else if dayOfTheWeek === 6}
    <p>Saturday</p>
{/if}

<style>
</style>