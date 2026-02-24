import {
  Title,
  Strip,
  NavLink,
  Button,
  TabPanel,
  ScrollArea,
  Accordion,
  Tabs,
  Checkbox,
  Select,
  Typer,
  LoadingDots,
  SpinLoadingIcon,
  Dialog,
  ContextMenu,
  Footer,
  Bar,
  IconSquare,
  Input,
  Switch,
  NumberField,
  Progress,
  Combobox,
  Slider,
  Badge,
  Card,
  DropdownMenu,
  Table,
  Textarea,
  Tooltip,
  Popover,
  useTheme,
} from "./components";

const contextItems = [
  { label: "日本語", value: "ja" },
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
  { label: "Italiano", value: "it" },
  { label: "Deutsch", value: "de" },
  { label: "Español", value: "es" },
];

const selectOptions = [
  { label: "Easy", value: "easy" },
  { label: "Normal", value: "normal" },
  { label: "Hard", value: "hard" },
  { label: "Very Hard", value: "very-hard" },
];

const weaponOptions = [
  { label: "Virtuous Contract", value: "virtuous-contract" },
  { label: "Virtuous Treaty", value: "virtuous-treaty" },
  { label: "Cruel Oath", value: "cruel-oath" },
  { label: "Type-3 Blade", value: "type-3-blade" },
  { label: "Type-40 Sword", value: "type-40-sword" },
  { label: "Machine Sword", value: "machine-sword" },
  { label: "Iron Pipe", value: "iron-pipe" },
  { label: "Phoenix Dagger", value: "phoenix-dagger" },
];

const dropdownItems = [
  { label: "Retrieve", value: "retrieve" },
  { label: "Repair", value: "repair" },
  { label: "Dispose", value: "dispose", disabled: true },
  { label: "Cancel", value: "cancel" },
];

const tableColumns = [
  { key: "stat" as const, header: "Stat", width: "160px" },
  {
    key: "base" as const,
    header: "Base",
    align: "right" as const,
    width: "80px",
  },
  {
    key: "bonus" as const,
    header: "Bonus",
    align: "right" as const,
    width: "80px",
  },
];

const tableData = [
  { stat: "Attack (Light)", base: "2,338", bonus: "+ 234" },
  { stat: "Attack (Heavy)", base: "1,876", bonus: "+ 188" },
  { stat: "Ranged Attack", base: "150", bonus: "+ 21" },
  { stat: "Defense", base: "734", bonus: "" },
  { stat: "HP", base: "2,643", bonus: "/ 2,643" },
];

const weaponGroups = [
  {
    label: "Small Swords",
    items: [
      { label: "Virtuous Contract", value: "virtuous-contract" },
      { label: "Cruel Oath", value: "cruel-oath" },
      { label: "Machine Sword", value: "machine-sword" },
    ],
  },
  {
    label: "Large Swords",
    items: [
      { label: "Virtuous Treaty", value: "virtuous-treaty" },
      { label: "Type-3 Blade", value: "type-3-blade" },
      { label: "Type-40 Sword", value: "type-40-sword" },
    ],
  },
  {
    label: "Spears",
    items: [
      { label: "Iron Pipe", value: "iron-pipe" },
      { label: "Phoenix Dagger", value: "phoenix-dagger" },
    ],
  },
];

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-[900px] mx-auto my-8 flex flex-col gap-4 px-4">
      <section className="py-2 flex justify-end">
        <Switch
          label={theme === "dark" ? "Dark Mode" : "Light Mode"}
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        />
      </section>

      <section className="py-2">
        <Title title="SYSTEM" subtitle="Settings" />
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-row flex-wrap gap-[2px]">
          <NavLink text="MAP" variant="nav" href="#" />
          <NavLink text="QUESTS" variant="nav" href="#" />
          <NavLink text="ITEMS" variant="nav" href="#" active />
          <NavLink text="WEAPONS" variant="nav" href="#" />
          <NavLink text="SKILLS" variant="nav" href="#" />
          <NavLink text="INTEL" variant="nav" href="#" />
          <NavLink text="SYSTEM" variant="nav" href="#" />
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col max-w-[300px] gap-[2px]">
          <Button>Save</Button>
          <Button>Load</Button>
          <Button>Settings</Button>
          <Button>Controls</Button>
          <Button disabled>Network</Button>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-4 [&>*]:flex-1">
          <Card title="Status" layout="fill">
            <p>9S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lv: 33</p>
            <p>Funds (G): &nbsp;&nbsp;&nbsp; 5,763</p>
            <p>EXP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 74,158</p>
          </Card>
          <Card title="Item Description" tone="primary" layout="fill">
            <p>Melee Attack Up (S)</p>
            <Strip />
            <p className="mt-2">
              Weapon attacks do double damage for 15 seconds.
            </p>
            <p className="mt-4 opacity-70">Number Held: 2/99</p>
          </Card>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-4 [&>*]:flex-1">
          <div className="h-[220px]">
            <TabPanel>
              <NavLink text="Small Recovery" href="#" />
              <NavLink text="Medium Recovery" href="#" />
              <NavLink text="Large Recovery" href="#" />
              <NavLink text="Aural Cure" href="#" />
              <NavLink text="Melee Attack Up (S)" href="#" active />
              <NavLink text="Ranged Attack Up (S)" href="#" />
              <NavLink text="Melee Defense Up (S)" href="#" />
            </TabPanel>
          </div>
          <div className="h-[220px]">
            <ScrollArea>
              <p>Scrollable content area with red accent scrollbar track.</p>
              <p className="mt-2">
                This component is useful for longer content sections that need
                overflow handling.
              </p>
            </ScrollArea>
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <Tabs
          tabs={[
            {
              label: "PLUG-IN CHIPS",
              value: "chips",
              children: (
                <div className="p-4 bg-surface">
                  <p>Offensive: Weapon Attack Up</p>
                  <p>Defensive: Max HP Up</p>
                  <p>Support: Auto-Heal</p>
                </div>
              ),
            },
            {
              label: "SKILLS",
              value: "skills",
              children: (
                <div className="p-4 bg-surface">
                  <p>Pod Program: R010 Laser</p>
                  <p>Pod Program: A150 Volt</p>
                </div>
              ),
            },
            {
              label: "INTEL",
              value: "intel",
              children: (
                <div className="p-4 bg-surface">
                  <p>Enemy data: 67% complete</p>
                  <p>Weapons found: 23/39</p>
                </div>
              ),
            },
          ]}
        />
      </section>

      <Strip />

      <section className="py-2">
        <Accordion title="Advanced Settings">
          <p>Hidden content revealed when the dropdown is expanded.</p>
        </Accordion>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div>
            <h4 className="mb-2 text-primary">Checkbox</h4>
            <div className="flex flex-col gap-2">
              <Checkbox label="HUD: Display" />
              <Checkbox label="Subtitles" defaultChecked />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-primary">Select</h4>
            <div className="w-[200px]">
              <Select
                options={selectOptions}
                placeholder="Difficulty"
              />
            </div>
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div>
            <h4 className="mb-2 text-primary">Input</h4>
            <div className="flex flex-col gap-2 w-full sm:w-[280px]">
              <Input placeholder="Enter player name..." />
              <Input placeholder="Disabled input" disabled />
            </div>
          </div>
          <div>
            <hgroup className="mb-2">
              <h4 className="text-primary">Form</h4>
              <p className="text-primary/80">Custom validation styles</p>
            </hgroup>
            <form className="flex flex-col gap-2 w-full sm:w-[280px]">
              <Input placeholder="Enter email" required type="email" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div>
            <h4 className="mb-2 text-primary">Switch</h4>
            <div className="flex flex-col gap-3">
              <Switch label="Online Mode" defaultChecked />
              <Switch label="Vibration" />
              <Switch label="Disabled" disabled />
            </div>
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div>
            <h4 className="mb-2 text-primary">Number Field</h4>
            <div className="w-[200px]">
              <NumberField
                label="Level"
                defaultValue={33}
                min={1}
                max={99}
              />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-primary">Slider</h4>
            <div className="w-[200px]">
              <Slider label="Volume" defaultValue={50} />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="mb-2 text-primary">Progress</h4>
            <div className="flex flex-col gap-3">
              <Progress value={74} label="EXP" />
              <Progress value={45} max={100} label="HP" />
              <Progress value={null} label="Syncing" />
            </div>
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div>
            <h4 className="mb-2 text-primary">Combobox</h4>
            <div className="w-[220px]">
              <Combobox
                label="Weapon"
                placeholder="Search weapons..."
                options={weaponOptions}
              />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="mb-2 text-primary">Combobox (Multi + Groups)</h4>
            <Combobox
              label="Loadout"
              placeholder="Search weapons..."
              groups={weaponGroups}
              selectionMode="multiple"
            />
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div>
            <h4 className="mb-2 text-primary">Typer</h4>
            <Typer
              text="[YoRHa] System boot sequence initiated..."
              speed={20}
            />
          </div>
          <div>
            <h4 className="mb-2 text-primary">Loading</h4>
            <span>
              Processing
              <LoadingDots />
            </span>
          </div>
          <div>
            <h4 className="mb-2 text-primary">Spinner</h4>
            <SpinLoadingIcon />
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div>
            <h4 className="mb-2 text-primary">Bar</h4>
            <div className="flex flex-row gap-4 h-[48px]">
              <Bar />
              <Bar tone="primary" />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-primary">IconSquare</h4>
            <IconSquare />
          </div>
          <div>
            <h4 className="mb-2 text-primary">NavLink Variants</h4>
            <div className="flex flex-col w-[220px] gap-[2px]">
              <NavLink text="Default" href="#" />
              <NavLink text="Transparent" variant="transparent" href="#" />
              <NavLink text="Neutral" variant="neutral" href="#" />
            </div>
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <div className="flex flex-col max-w-[300px] gap-4">
          <Dialog
            title="RESULT"
            trigger={<Button>Open Dialog</Button>}
          >
            <p>- Total Stages Cleared -</p>
            <p className="text-alert mt-2">NEW RECORD &nbsp; 0 &rarr; 14</p>
          </Dialog>
          <ContextMenu
            items={contextItems}
            onSelect={(v) => console.log("Selected:", v)}
          >
            <div className="border-2 border-muted h-[72px] flex items-center justify-center font-yorha text-sm text-primary tracking-[1px] cursor-context-menu select-none">
              Right click here
            </div>
          </ContextMenu>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Badge</h4>
        <div className="flex flex-row gap-3 items-center">
          <Badge text="Lv 33" />
          <Badge text="NEW" variant="alert" />
          <Badge text="Equipped" variant="outline" />
          <span className="text-sm">
            Desert Machines <Badge text="NEW" variant="alert" />
          </span>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Tooltip</h4>
        <div className="flex flex-row flex-wrap gap-6 items-center">
          <Tooltip label="Save your progress">
            <Button>Save</Button>
          </Tooltip>
          <Tooltip label="Bottom tooltip" side="bottom">
            <Button>Hover me</Button>
          </Tooltip>
          <Tooltip label="Left side" side="left">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip label="Right side" side="right">
            <Button>Right</Button>
          </Tooltip>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Popover</h4>
        <div className="flex flex-row flex-wrap gap-6 items-center">
          <Popover
            trigger={<Button>Edit Unit Data</Button>}
            title="UNIT DATA"
          >
            <div className="flex flex-col gap-2 min-w-[200px]">
              <Input placeholder="Designation..." />
              <Input placeholder="Serial number..." />
            </div>
          </Popover>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Card</h4>
        <div className="flex flex-col sm:flex-row gap-4 [&>*]:flex-1">
          <Card title="Unit Data">
            <p className="text-sm">
              These machine lifeforms evolved in the Desert Zone and engage in
              ceremonies based on the cultural rituals of past humans.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-medium">Storage Used: 60/72</p>
            <div className="mt-2">
              <Progress value={83} label="Capacity" />
            </div>
          </Card>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Dropdown Menu</h4>
        <div className="w-[200px]">
          <DropdownMenu
            label="Actions"
            items={dropdownItems}
            onSelect={(v) => console.log("Action:", v)}
          />
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Table</h4>
        <div className="max-w-[400px]">
          <Table columns={tableColumns} data={tableData} />
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Textarea</h4>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-full sm:w-[300px]">
            <Textarea placeholder="Enter mission notes..." rows={4} />
          </div>
          <div className="w-full sm:w-[300px]">
            <Textarea placeholder="Read-only log output" disabled rows={4} />
          </div>
        </div>
      </section>

      <Strip />

      <section className="py-2">
        <h4 className="mb-2 text-primary">Colors</h4>
        <div className="flex flex-row flex-wrap gap-4">
          {[
            {
              name: "Background",
              var: "--bg",
              value: "#d1cdb7",
              className: "bg-body",
            },
            {
              name: "Surface",
              var: "--bg-surface",
              value: "#dad4bb",
              className: "bg-surface",
            },
            {
              name: "Muted",
              var: "--bg-muted",
              value: "#b4af9a",
              className: "bg-muted",
            },
            {
              name: "Primary",
              var: "--primary",
              value: "#57544a",
              className: "bg-primary",
            },
            {
              name: "Primary Dark",
              var: "--primary-dark",
              value: "#4e4b42",
              className: "bg-primary-dark",
            },
            {
              name: "Alert",
              var: "--alert",
              value: "#cd664d",
              className: "bg-alert",
            },
            {
              name: "Text",
              var: "--text",
              value: "#3f3d36",
              className: "bg-foreground",
            },
            {
              name: "Grid Line",
              var: "--grid-line",
              value: "#ccc8b1",
              className: "bg-grid-line",
            },
            {
              name: "Glitch",
              var: "--glitch",
              value: "#1e1e1a",
              className: "bg-glitch",
            },
          ].map((color) => (
            <div key={color.var} className="flex flex-col items-center gap-1">
              <div
                className={`w-16 h-16 border-2 border-muted ${color.className}`}
              />
              <span className="text-xs font-medium text-primary">
                {color.name}
              </span>
              <span className="text-xs text-primary opacity-60">
                {color.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Strip />

      <Footer text="Glory To Mankind" />
    </div>
  );
}

export default App;
