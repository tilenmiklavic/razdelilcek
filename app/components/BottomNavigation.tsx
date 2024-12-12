import TabElement from "./TabElement";

export default function BottomNavigation() {
    return (
        <footer className="navigation-container w-full pb-2 divide-y">
            <div></div>
            <div className="flex flex-row justify-around pt-1 items-center">
                <TabElement icon="user" route="/protected/friends" label="Friends" />
                <TabElement icon="user-group" route="/protected/groups" label="Groups" />
                <i className="fa-solid fa-square-plus text-4xl"></i>
                <TabElement icon="chart-line" route="/protected/activity" label="Activity" />
                <TabElement icon="house" route="/protected/account" label="Account" />
            </div>
        </footer>
    )
}

