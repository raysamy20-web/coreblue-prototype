# CoreBlue Prototype

CoreBlue is a browser-based product prototype for factory automation knowledge management. It shows how a team can map an installed automation system, link configuration choices to public manufacturer evidence, record internal reasoning, create safe review tasks, and assess a relevant manufacturer update.

## Run locally

The prototype has no build step and no dependency installation.

1. Download or clone the repository.
2. Open `index.html` in a modern web browser.
3. The prototype stores confirmed decisions and generated tasks in that browser only.

## Demonstration script

Use this flow in a presentation.

1. **System overview**: Select the HMI, PLC, drive, motor, and photo-eye sensor. Show their roles, configuration, connections, and evidence.
2. **Knowledge gap**: Select the photo-eye sensor. Explain that manufacturer material supports the system pattern, while the factory-specific purpose remains unknown until an engineer confirms it.
3. **Decision ledger**: Show documented decisions and the gap. Select **Record a decision**, add the internal reason and confirmer, then save it.
4. **Change assistant**: Describe an operating problem. Generate a review task and show the safety boundary, checks, evidence, and completion criteria.
5. **Updates**: Create a review task for the example PowerFlex compatibility notice. Explain that CoreBlue flags impact for engineer review, not automatic change.
6. **Knowledge pack**: Export the local record to demonstrate how the team retains decisions and tasks.

## Evidence used

The seeded conveyor example uses public Rockwell Automation material:

- [E-commerce Conveyor Control System](https://literature.rockwellautomation.com/idc/groups/literature/documents/wp/ssb-wp008_-en-p.pdf)
- [Logix5000 Control Systems: Connecting PowerFlex 525 Drives Over an EtherNet/IP Network](https://literature.rockwellautomation.com/idc/groups/literature/documents/qs/iasimp-qs036_-en-p.pdf)
- [PowerFlex Drives: FactoryTalk View Faceplates](https://support.rockwellautomation.com/app/answers/answer_view/a_id/1049774)

## Prototype boundary

The application uses seeded example data and browser local storage. It does not query real plant equipment, automatically ingest manufacturer notices, or change PLC, drive, or safety configurations.

A production service would add company authentication, a shared access-controlled knowledge store, audit history, document ingestion and retrieval, manufacturer update monitoring, role-based approvals, and plant asset-system integration. A qualified engineer must approve every live control-system change.
