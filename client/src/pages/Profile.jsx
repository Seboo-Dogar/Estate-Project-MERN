import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profile() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-md rounded-md">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Profile</h1>

    <form  className="space-y-4">
      <input
        // onChange={(e) => setFile(e.target.files[0])}
        type="file"
        // ref={fileRef}
        hidden
        accept="image/*"
      />
      <div className="flex justify-center">
        <img
          // onClick={() => fileRef.current.click()}
          src={ currentUser.avatar}
          alt="profile"
          className="w-24 h-24 rounded-full object-cover cursor-pointer border-2 border-slate-300"
        />
      </div>

      {/* <p className="text-center text-sm text-gray-600">
        {fileUploadError ? (
          <span className="text-red-500">
            Error uploading image (must be less than 2 MB)
          </span>
        ) : filePerc > 0 && filePerc < 100 ? (
          <span className="text-slate-600">{`Uploading ${filePerc}%`}</span>
        ) : filePerc === 100 ? (
          <span className="text-green-600">Image successfully uploaded!</span>
        ) : (
          ''
        )}
      </p> */}

      <input
        type="text"
        placeholder="Username"
        defaultValue={currentUser.username}
        id="username"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
        // onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        defaultValue={currentUser.email}
        id="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
        // onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
        // onChange={handleChange}
      />

      <button
        // disabled={loading}
        className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {/* {loading ? 'Loading...' : 'Update'} */}Update
      </button>

      <Link
        to="/create-listing"
        className="block text-center text-slate-700 font-medium hover:underline"
      >
        Create Listing
      </Link>
    </form>

    <div className="mt-6 flex justify-between text-sm text-slate-700">
      <span
        // onClick={handleDeleteUser}
        className="cursor-pointer hover:underline text-red-600"
      >
        Delete account
      </span>
      <span
        // onClick={handleSignOut}
        className="cursor-pointer hover:underline"
      >
        Sign out
      </span>
    </div>

    {/* {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
    {updateSuccess && (
      <p className="text-green-600 mt-4 text-sm">
        User updated successfully!
      </p>
    )} */}

    <button
      // onClick={handleShowListings}
      className="mt-6 w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-md"
    >
      Show Listings
    </button>

    {/* {showListingsError && (
      <p className="text-red-500 mt-2 text-sm text-center">
        Error showing listings
      </p>
    )} */}

    {/* {userListings && userListings.length > 0 && (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Listings
        </h2>
        <div className="space-y-4">
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className="p-4 border border-gray-200 rounded-md flex justify-between items-center"
            >
              <Link to={`/listing/${listing._id}`} className="flex items-center gap-4">
                <img
                  src={listing.imageUrls[0]}
                  alt="listing"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p className="text-slate-800 font-medium">{listing.name}</p>
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleListingDelete(listing._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
                <Link to={`/update-listing/${listing._id}`}>
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )} */}
  </div>
  )
}

export default Profile