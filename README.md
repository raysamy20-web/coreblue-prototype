# CoreBlue Prototype

A working browser prototype for the CoreBlue brief. It shows how a factory team can understand an automation system, retain configuration decisions, create safe investigation tasks, and assess manufacturer-update impact.

## Run it

The prototype has no dependencies or build step.

1. Download or clone this repository.
2. Open `index.html` in a browser.
3. Use the four tabs during the demonstration.

## Demonstration flow

1. **System map**: explain the installed conveyor automation example and its component connections.
2. **Decision ledger**: show source-backed choices, an explanation gap, and the team confirmation flow. Save a reason to demonstrate that knowledge remains in the company record.
3. **Change assistant**: type a plant problem, then generate a task with checks, reason, evidence, and completion criteria.
4. **Updates**: show a manufacturer update that may affect an installed drive, then create its review task.
5. **Export records**: download the local decision and task record as JSON. This shows a simple knowledge-retention path for the prototype.

## Evidence used

The seeded example is based on public Rockwell Automation documentation:

- [E-commerce Conveyor Control System](https://literature.rockwellautomation.com/idc/groups/literature/documents/wp/ssb-wp008_-en-p.pdf)
- [Logix5000 Control Systems: Connecting PowerFlex 525 Drives Over an EtherNet/IP Network](https://literature.rockwellautomation.com/idc/groups/literature/documents/qs/iasimp-qs036_-en-p.pdf)
- [PowerFlex Drives: FactoryTalk View Faceplates](https://support.rockwellautomation.com/app/answers/answer_view/a_id/1049774)

## Prototype boundary

Records are stored only in the browser's local storage and can be exported by the demonstrator. A production version would add authentication, a protected company knowledge store, manufacturer update ingestion, role approvals, audit history, and links to plant asset records. It must never apply live PLC, drive, or safety changes without qualified engineer approval.
