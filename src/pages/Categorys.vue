<template>
    <section class="fncont columns">
        <div class="column is-8">
            <table class="table">
                <thead>
                    <tr>
                        <th><abbr title="Numer">Nr</abbr></th>
                        <th>Pytania</th>
                        <th><abbr title="Lista pytań">L. pytań</abbr></th>
                        <th>Poziom</th>
                        <th>Ukończone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th><router-link to="/check" tag="a">Twitter master</router-link></th>
                        <th>3</th>
                        <th>Początkujący</th>
                        <th>Nie</th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="column is-4">
            <UserAside></UserAside>
            <DoYouKnow></DoYouKnow>
            <UserBadge></UserBadge>
        </div>
    </section>
</template>

<script>
    import UserAside from '@/partials/UserAside';
    import DoYouKnow from '@/partials/DoYouKnow';
    import UserBadge from '@/partials/UserBadge';
    export default {
        components: {
            UserAside,
            DoYouKnow,
            UserBadge,
        }
    }
</script>

<style scoped lang="scss">
    .columns {
        margin: 80px auto;
        .column:nth-of-type(1) {
            background: white;
            padding: 15px;
        }
    }
</style>