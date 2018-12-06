module.exports = function(sequelize, DataTypes) {
  const Listing = sequelize.define("Listing", {
    host_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    phone_num: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    street_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        len: [1, 150]
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        len: [2, 150]
      }
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 5
      }
    },
    description: DataTypes.TEXT
  });

  return Listing
};