/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the contact
 *         name:
 *           type: string
 *           description: The name of the contact
 *         email:
 *           type: string
 *           description: The email of the contact
 *         phone:
 *           type: string
 *           description: The phone number of the contact
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the contact was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the contact was last updated
 *       example:
 *         id: d5fE_asz
 *         name: John Doe
 *         email: john.doe@example.com
 *         phone: 123456789
 *         createdAt: 2021-03-10T04:05:06.157Z
 *         updatedAt: 2021-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: The contacts managing API
 */