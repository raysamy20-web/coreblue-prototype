# CoreBlue Prototype

A working browser prototype for the CoreBlue brief. It shows how a factory team can understand an automation system, retain configuration decisions, create safe investigation tasks, and assess manufacturer update impact.

## Run it

This prototype has no build step or dependencies.

1. Download or clone this repository.
2. Open `index.html` in a web browser.

## Demonstration flow

1. Open **System map** to explain the installed conveyor automation example.
2. Open **Decision ledger** to show documented choices, source links, and an explanation gap. Enter a reason and save it.
3. Open **Change assistant**. Describe a plant problem, then generate an evidence-backed check task.
4. Open **Updates** to show a sample manufacturer-update impact review.

## Evidence used

The seeded example is based on public Rockwell Automation documentation:

- [E-commerce Conveyor Control System](https://literature.rockwellautomation.com/idc/groups/literature/documents/wp/ssb-wp008_-en-p.pdf)
- [Logix5000 Control Systems: Connecting PowerFlex 525 Drives Over an EtherNet/IP Network](https://literature.rockwellautomation.com/idc/groups/literature/documents/qs/iasimp-qs036_-en-p.pdf)
- [PowerFlex Drives: FactoryTalk View Faceplates](https://support.rockwellautomation.com/app/answers/answer_view/a_id/1049774)

## Prototype boundary

This is a presentation prototype with seeded data. A production version would add user authentication, a protected company knowledge store, manufacturer update ingestion, role approvals, audit history, and integrations with control-system asset records. It must never apply live PLC, drive, or safety changes without qualified engineer approval.
