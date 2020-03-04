<template>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter task-list">
            <div class="box">
                <h2 class="title">My tasks</h2>
                <hr />
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input
                            class="input"
                            type="text"
                            placeholder="New task"
                            v-model="task.body"
                        />
                    </div>
                    <div class="control">
                        <a class="button is-primary" @click="createTask()">
                            Add task
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            task: {
                id: '',
                body: '',
                archive: '',
            },
            activeItem: 'current',
        };
    },
    created() {
        this.fetchTaskList();
    },
    methods: {
        fetchTaskList(archive = null) {
            if (archive === null) {
                var url = 'current_tasks';
                this.setActive('current');
            } else {
                var url = 'archived_tasks';
                this.setActive('archive');
            }
            axios.get(url).then(result => {
                this.list = result.data;
            });
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        createTask() {
            axios
                .post('create_task', this.task)
                .then(result => {
                    this.task.body = '';
                    this.fetchTaskList();
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
};
</script>
